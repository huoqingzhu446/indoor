import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';

@ApiTags('projects')
@Controller('v1/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List all projects' })
  findAll() {
    return this.projectsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new project from a room photo' })
  create(@Body() dto: CreateProjectDto) {
    return this.projectsService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project detail' })
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Get(':id/results')
  @ApiOperation({ summary: 'Get all rendering results for a project' })
  findResults(@Param('id') id: string) {
    return this.projectsService.findResults(id);
  }

  @Post(':id/modules/:moduleCode/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 50 * 1024 * 1024,
      },
    }),
  )
  @ApiOperation({ summary: 'Upload a required preview module image for a project' })
  uploadModule(
    @Param('id') id: string,
    @Param('moduleCode') moduleCode: string,
    @UploadedFile() file: { originalname: string; mimetype: string; size: number; buffer: Buffer },
  ) {
    return this.projectsService.uploadModule(id, moduleCode, file);
  }
}
