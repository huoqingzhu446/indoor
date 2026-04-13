import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JobsOptions, Queue } from 'bullmq';
import IORedis from 'ioredis';
import { RENDER_GENERATE_JOB, RENDER_GENERATE_QUEUE } from './render-queue.constants';

@Injectable()
export class RenderQueueService implements OnModuleDestroy {
  private readonly connection: IORedis;
  private readonly queue: Queue;

  constructor(private readonly configService: ConfigService) {
    this.connection = new IORedis(this.configService.get<string>('REDIS_URL') ?? 'redis://localhost:6379/0', {
      maxRetriesPerRequest: null,
    });
    this.queue = new Queue(RENDER_GENERATE_QUEUE, {
      connection: this.connection,
      defaultJobOptions: {
        attempts: 2,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
        removeOnComplete: {
          count: 100,
        },
        removeOnFail: {
          count: 100,
        },
      },
    });
  }

  async enqueueRenderTask(renderTaskId: string, options?: JobsOptions) {
    await this.queue.add(
      RENDER_GENERATE_JOB,
      { renderTaskId },
      {
        jobId: renderTaskId,
        ...options,
      },
    );
  }

  async onModuleDestroy() {
    await this.queue.close();
    await this.connection.quit();
  }
}
