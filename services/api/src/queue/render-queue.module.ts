import { Global, Module } from '@nestjs/common';
import { RenderQueueService } from './render-queue.service';

@Global()
@Module({
  providers: [RenderQueueService],
  exports: [RenderQueueService],
})
export class RenderQueueModule {}
