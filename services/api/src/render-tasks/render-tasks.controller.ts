import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRenderTaskDto } from './dto/create-render-task.dto';
import { RenderTasksService } from './render-tasks.service';

@ApiTags('render-tasks')
@Controller('v1')
export class RenderTasksController {
  constructor(private readonly renderTasksService: RenderTasksService) {}

  @Get('render-tasks')
  @ApiOperation({ summary: 'List all render tasks' })
  findAll() {
    return this.renderTasksService.findAll();
  }

  @Post('projects/:projectId/render')
  @ApiOperation({ summary: 'Create a render task for a project' })
  create(@Param('projectId') projectId: string, @Body() dto: CreateRenderTaskDto) {
    return this.renderTasksService.create(projectId, dto);
  }

  @Get('render-tasks/:taskId')
  @ApiOperation({ summary: 'Get render task detail' })
  findOne(@Param('taskId') taskId: string) {
    return this.renderTasksService.findOne(taskId);
  }
}
