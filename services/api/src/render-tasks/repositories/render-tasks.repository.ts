import { Injectable, NotFoundException } from '@nestjs/common';
import { AssetKind, Prisma, RenderTaskStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

const renderTaskInclude = {
  results: {
    orderBy: {
      createdAt: 'asc',
    },
  },
} satisfies Prisma.RenderTaskInclude;

type RenderTaskRecord = Prisma.RenderTaskGetPayload<{ include: typeof renderTaskInclude }>;

interface CreateRenderTaskInput {
  projectId: string;
  styleCode: string;
  budgetLevel: string;
  constraints: string[];
  candidateCount: number;
  providerCode: string;
  modelCode: string;
}

interface CompleteRenderTaskInput {
  providerCode: string;
  modelCode: string;
  textModel?: string;
  promptPreview?: string;
  candidates: Array<{
    title: string;
    imageUrl: string;
    score: number;
    objectKey: string;
  }>;
}

@Injectable()
export class RenderTasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listAll() {
    const tasks = await this.prisma.renderTask.findMany({
      include: renderTaskInclude,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return tasks.map((task) => this.mapTask(task));
  }

  async findOne(taskId: string) {
    const task = await this.prisma.renderTask.findUnique({
      where: { id: taskId },
      include: renderTaskInclude,
    });

    if (!task) {
      throw new NotFoundException(`Render task ${taskId} not found`);
    }

    return this.mapTask(task);
  }

  async create(input: CreateRenderTaskInput) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.project.findUnique({
        where: { id: input.projectId },
      });

      if (!project) {
        throw new NotFoundException(`Project ${input.projectId} not found`);
      }

      await tx.projectConstraint.deleteMany({
        where: { projectId: input.projectId },
      });

      if (input.constraints.length > 0) {
        await tx.projectConstraint.createMany({
          data: input.constraints.map((value) => ({
            projectId: input.projectId,
            value,
          })),
        });
      }

      const task = await tx.renderTask.create({
        data: {
          projectId: input.projectId,
          providerCode: input.providerCode,
          modelCode: input.modelCode,
          styleCode: input.styleCode,
          budgetLevel: input.budgetLevel,
          constraints: input.constraints,
          candidateCount: input.candidateCount,
          status: RenderTaskStatus.queued,
          progressPercent: 0,
          requestPayload: {
            styleCode: input.styleCode,
            budgetLevel: input.budgetLevel,
            constraints: input.constraints,
            candidateCount: input.candidateCount,
          } satisfies Prisma.InputJsonValue,
        },
        include: renderTaskInclude,
      });

      await tx.project.update({
        where: { id: input.projectId },
        data: {
          styleCode: input.styleCode,
          budgetLevel: input.budgetLevel,
          latestRenderTaskId: task.id,
        },
      });

      return this.mapTask(task);
    });
  }

  async getExecutionPayload(taskId: string) {
    const task = await this.prisma.renderTask.findUnique({
      where: { id: taskId },
      include: {
        project: {
          include: {
            constraints: true,
            assets: {
              where: {
                kind: AssetKind.original,
              },
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
            },
          },
        },
      },
    });

    if (!task) {
      throw new NotFoundException(`Render task ${taskId} not found`);
    }

    const originalAsset = task.project.assets[0];

    return {
      taskId: task.id,
      projectId: task.projectId,
      sourceImageUrl: originalAsset?.publicUrl ?? task.project.originalImageUrl,
      roomType: task.project.roomType,
      styleCode: task.styleCode,
      budgetLevel: task.budgetLevel,
      constraints:
        task.constraints.length > 0
          ? task.constraints
          : task.project.constraints.map((item) => item.value),
      candidateCount: task.candidateCount,
      providerCode: task.providerCode,
      modelCode: task.modelCode,
    };
  }

  async markProcessing(taskId: string) {
    const task = await this.prisma.renderTask.update({
      where: { id: taskId },
      data: {
        status: RenderTaskStatus.processing,
        progressPercent: 18,
      },
      include: renderTaskInclude,
    });

    return this.mapTask(task);
  }

  async complete(taskId: string, input: CompleteRenderTaskInput) {
    return this.prisma.$transaction(async (tx) => {
      const task = await tx.renderTask.findUnique({
        where: { id: taskId },
      });

      if (!task) {
        throw new NotFoundException(`Render task ${taskId} not found`);
      }

      await tx.renderResult.deleteMany({
        where: { renderTaskId: taskId },
      });

      if (input.candidates.length > 0) {
        await tx.renderResult.createMany({
          data: input.candidates.map((candidate) => ({
            projectId: task.projectId,
            renderTaskId: taskId,
            title: candidate.title,
            imageUrl: candidate.imageUrl,
            score: candidate.score,
            styleCode: task.styleCode,
          })),
        });

        await tx.projectAsset.createMany({
          data: input.candidates.map((candidate, index) => ({
            projectId: task.projectId,
            kind: AssetKind.render,
            fileName: `${task.id}-${index + 1}.png`,
            objectKey: candidate.objectKey,
            publicUrl: candidate.imageUrl,
            contentType: 'image/png',
          })),
        });
      }

      await tx.renderTask.update({
        where: { id: taskId },
        data: {
          status: RenderTaskStatus.completed,
          progressPercent: 100,
          providerCode: input.providerCode,
          modelCode: input.modelCode,
          responseSummary: {
            providerCode: input.providerCode,
            modelCode: input.modelCode,
            textModel: input.textModel,
            promptPreview: input.promptPreview,
            resultCount: input.candidates.length,
          } satisfies Prisma.InputJsonValue,
        },
      });

      await tx.project.update({
        where: { id: task.projectId },
        data: {
          status: 'rendered',
          latestRenderTaskId: taskId,
        },
      });

      const completed = await tx.renderTask.findUniqueOrThrow({
        where: { id: taskId },
        include: renderTaskInclude,
      });

      return this.mapTask(completed);
    });
  }

  async fail(taskId: string, errorMessage: string) {
    const task = await this.prisma.renderTask.update({
      where: { id: taskId },
      data: {
        status: RenderTaskStatus.failed,
        progressPercent: 100,
        responseSummary: {
          errorMessage,
        } satisfies Prisma.InputJsonValue,
      },
      include: renderTaskInclude,
    });

    return this.mapTask(task);
  }

  private mapTask(task: RenderTaskRecord) {
    return {
      id: task.id,
      projectId: task.projectId,
      styleCode: task.styleCode,
      budgetLevel: task.budgetLevel,
      constraints: task.constraints,
      status: task.status,
      progressPercent: task.progressPercent,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      results: task.results.map((item) => ({
        id: item.id,
        imageUrl: item.imageUrl,
        styleCode: item.styleCode,
        title: item.title,
        score: item.score,
      })),
    };
  }
}
