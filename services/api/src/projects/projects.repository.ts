import { Injectable, NotFoundException } from '@nestjs/common';
import { AssetKind, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { getProjectModuleTemplate } from './project-module.templates';

const projectInclude = {
  constraints: true,
  modules: {
    orderBy: {
      sortOrder: 'asc',
    },
  },
} satisfies Prisma.ProjectInclude;

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const projects = await this.prisma.project.findMany({
      include: projectInclude,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return projects.map((project) => this.mapProject(project));
  }

  async findOne(projectId: string) {
    await this.ensureModulesInitialized(projectId);

    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: projectInclude,
    });

    if (!project) {
      throw new NotFoundException(`Project ${projectId} not found`);
    }

    return this.mapProject(project);
  }

  async create(dto: CreateProjectDto) {
    return this.prisma.$transaction(async (tx) => {
      const uploadTicket = dto.uploadId
        ? await tx.uploadTicket.findUnique({ where: { id: dto.uploadId } })
        : null;

      if (dto.uploadId && !uploadTicket) {
        throw new NotFoundException(`Upload ticket ${dto.uploadId} not found`);
      }

      const project = await tx.project.create({
        data: {
          name: dto.name,
          roomType: dto.roomType,
          styleCode: dto.styleCode,
          budgetLevel: dto.budgetLevel,
          originalImageUrl: dto.originalImageUrl,
        },
      });

      if (dto.constraints.length > 0) {
        await tx.projectConstraint.createMany({
          data: dto.constraints.map((value) => ({
            projectId: project.id,
            value,
          })),
        });
      }

      const moduleTemplate = getProjectModuleTemplate(dto.roomType);
      await tx.projectModule.createMany({
        data: moduleTemplate.map((item, index) => ({
          projectId: project.id,
          moduleCode: item.moduleCode,
          moduleName: item.moduleName,
          sortOrder: item.sortOrder,
          status: index === 0 ? 'uploaded' : 'pending',
          publicUrl: index === 0 ? dto.originalImageUrl : null,
          objectKey: index === 0 ? uploadTicket?.objectKey ?? null : null,
          contentType: index === 0 ? uploadTicket?.contentType ?? null : null,
          fileSize: index === 0 ? uploadTicket?.fileSize ?? null : null,
        })),
      });

      await tx.projectAsset.create({
        data: {
          projectId: project.id,
          kind: AssetKind.original,
          fileName: uploadTicket?.fileName ?? null,
          objectKey:
            uploadTicket?.objectKey ?? `external/${project.id}/original-${Date.now()}.jpg`,
          publicUrl: dto.originalImageUrl,
          contentType: uploadTicket?.contentType ?? null,
          fileSize: uploadTicket?.fileSize ?? null,
        },
      });

      if (uploadTicket) {
        await tx.uploadTicket.update({
          where: { id: uploadTicket.id },
          data: { status: 'used' },
        });
      }

      const created = await tx.project.findUniqueOrThrow({
        where: { id: project.id },
        include: projectInclude,
      });

      return this.mapProject(created);
    });
  }

  async findResults(projectId: string) {
    await this.ensureProjectExists(projectId);

    return this.prisma.renderResult.findMany({
      where: { projectId },
      orderBy: [{ score: 'desc' }, { createdAt: 'asc' }],
    });
  }

  async ensureProjectExists(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new NotFoundException(`Project ${projectId} not found`);
    }

    return project;
  }

  async attachModuleUpload(
    projectId: string,
    moduleCode: string,
    input: {
      fileName: string;
      contentType: string;
      fileSize: number;
      objectKey: string;
      publicUrl: string;
    },
  ) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.project.findUnique({
        where: { id: projectId },
      });

      if (!project) {
        throw new NotFoundException(`Project ${projectId} not found`);
      }

      const module = await tx.projectModule.findFirst({
        where: {
          projectId,
          moduleCode,
        },
      });

      if (!module) {
        throw new NotFoundException(`Project module ${moduleCode} not found`);
      }

      await tx.projectModule.update({
        where: { id: module.id },
        data: {
          status: 'uploaded',
          publicUrl: input.publicUrl,
          objectKey: input.objectKey,
          contentType: input.contentType,
          fileSize: input.fileSize,
        },
      });

      await tx.projectAsset.create({
        data: {
          projectId,
          kind: AssetKind.original,
          fileName: input.fileName,
          objectKey: input.objectKey,
          publicUrl: input.publicUrl,
          contentType: input.contentType,
          fileSize: input.fileSize,
        },
      });

      const refreshed = await tx.project.findUniqueOrThrow({
        where: { id: projectId },
        include: projectInclude,
      });

      return this.mapProject(refreshed);
    });
  }

  async ensureModulesInitialized(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: {
        modules: true,
        assets: {
          where: { kind: AssetKind.original },
          orderBy: { createdAt: 'asc' },
          take: 1,
        },
      },
    });

    if (!project) {
      throw new NotFoundException(`Project ${projectId} not found`);
    }

    if (project.modules.length > 0) {
      return;
    }

    const moduleTemplate = getProjectModuleTemplate(project.roomType);
    const firstAsset = project.assets[0];

    await this.prisma.projectModule.createMany({
      data: moduleTemplate.map((item, index) => ({
        projectId: project.id,
        moduleCode: item.moduleCode,
        moduleName: item.moduleName,
        sortOrder: item.sortOrder,
        status: index === 0 ? 'uploaded' : 'pending',
        publicUrl: index === 0 ? firstAsset?.publicUrl ?? project.originalImageUrl : null,
        objectKey: index === 0 ? firstAsset?.objectKey ?? null : null,
        contentType: index === 0 ? firstAsset?.contentType ?? null : null,
        fileSize: index === 0 ? firstAsset?.fileSize ?? null : null,
      })),
      skipDuplicates: true,
    });
  }

  private mapProject(project: Prisma.ProjectGetPayload<{ include: typeof projectInclude }>) {
    const uploadedModules = project.modules.filter((item) => item.status === 'uploaded').length;
    const previewReady = project.modules.length > 0 && uploadedModules === project.modules.length;

    return {
      id: project.id,
      name: project.name,
      roomType: project.roomType,
      originalImageUrl: project.originalImageUrl,
      styleCode: project.styleCode,
      budgetLevel: project.budgetLevel,
      constraints: project.constraints.map((item) => item.value),
      modules: project.modules.map((item) => ({
        id: item.id,
        moduleCode: item.moduleCode,
        moduleName: item.moduleName,
        sortOrder: item.sortOrder,
        status: item.status,
        publicUrl: item.publicUrl ?? undefined,
      })),
      uploadedModuleCount: uploadedModules,
      requiredModuleCount: project.modules.length,
      previewReady,
      status: project.status,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
      latestRenderTaskId: project.latestRenderTaskId ?? undefined,
    };
  }
}
