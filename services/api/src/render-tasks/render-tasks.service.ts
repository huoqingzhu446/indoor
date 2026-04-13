import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RenderQueueService } from '../queue/render-queue.service';
import { StorageService } from '../storage/storage.service';
import { CompleteRenderTaskDto } from './dto/complete-render-task.dto';
import { CreateRenderTaskDto } from './dto/create-render-task.dto';
import { FailRenderTaskDto } from './dto/fail-render-task.dto';
import { RenderTasksRepository } from './repositories/render-tasks.repository';

@Injectable()
export class RenderTasksService {
  constructor(
    private readonly renderTasksRepository: RenderTasksRepository,
    private readonly renderQueueService: RenderQueueService,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
  ) {}

  findAll() {
    return this.renderTasksRepository.listAll();
  }

  async create(projectId: string, dto: CreateRenderTaskDto) {
    const task = await this.renderTasksRepository.create({
      projectId,
      styleCode: dto.styleCode,
      budgetLevel: dto.budgetLevel,
      constraints: dto.constraints,
      candidateCount: dto.candidateCount,
      providerCode: 'minimax',
      modelCode: this.configService.get<string>('MINIMAX_IMAGE_MODEL') ?? 'image-01-live',
    });

    await this.renderQueueService.enqueueRenderTask(task.id);

    return task;
  }

  findOne(taskId: string) {
    return this.renderTasksRepository.findOne(taskId);
  }

  getExecutionPayload(taskId: string) {
    return this.renderTasksRepository.getExecutionPayload(taskId);
  }

  markProcessing(taskId: string) {
    return this.renderTasksRepository.markProcessing(taskId);
  }

  async complete(taskId: string, dto: CompleteRenderTaskDto) {
    const executionPayload = await this.renderTasksRepository.getExecutionPayload(taskId);
    const persistedCandidates = await Promise.all(
      dto.candidates.map(async (candidate, index) => {
        const key = this.storageService.createObjectKey(
          `renders/${executionPayload.projectId}/${taskId}`,
          `${candidate.title}.png`,
        );
        const storedObject = await this.storageService.persistRemotePublicObject({
          sourceUrl: candidate.imageUrl,
          key,
          fallbackContentType: 'image/png',
        });

        return {
          ...candidate,
          imageUrl: storedObject.publicUrl,
          objectKey: storedObject.objectKey,
        };
      }),
    );

    return this.renderTasksRepository.complete(taskId, {
      ...dto,
      candidates: persistedCandidates.map((candidate) => ({
        title: candidate.title,
        imageUrl: candidate.imageUrl,
        score: candidate.score,
        objectKey: candidate.objectKey,
      })),
    });
  }

  fail(taskId: string, dto: FailRenderTaskDto) {
    return this.renderTasksRepository.fail(taskId, dto.errorMessage);
  }
}
