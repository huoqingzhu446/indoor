import { Module } from '@nestjs/common';
import { InternalRenderTasksController } from './internal-render-tasks.controller';
import { RenderTasksController } from './render-tasks.controller';
import { RenderTasksRepository } from './repositories/render-tasks.repository';
import { RenderTasksService } from './render-tasks.service';

@Module({
  controllers: [RenderTasksController, InternalRenderTasksController],
  providers: [RenderTasksRepository, RenderTasksService],
})
export class RenderTasksModule {}
