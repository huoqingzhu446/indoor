import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { InternalTokenGuard } from '../common/guards/internal-token.guard';
import { CompleteRenderTaskDto } from './dto/complete-render-task.dto';
import { FailRenderTaskDto } from './dto/fail-render-task.dto';
import { RenderTasksService } from './render-tasks.service';

@ApiExcludeController()
@UseGuards(InternalTokenGuard)
@Controller('internal/render-tasks')
export class InternalRenderTasksController {
  constructor(private readonly renderTasksService: RenderTasksService) {}

  @Get(':taskId/execution-payload')
  getExecutionPayload(@Param('taskId') taskId: string) {
    return this.renderTasksService.getExecutionPayload(taskId);
  }

  @Post(':taskId/mark-processing')
  markProcessing(@Param('taskId') taskId: string) {
    return this.renderTasksService.markProcessing(taskId);
  }

  @Post(':taskId/complete')
  complete(@Param('taskId') taskId: string, @Body() dto: CompleteRenderTaskDto) {
    return this.renderTasksService.complete(taskId, dto);
  }

  @Post(':taskId/fail')
  fail(@Param('taskId') taskId: string, @Body() dto: FailRenderTaskDto) {
    return this.renderTasksService.fail(taskId, dto);
  }
}
