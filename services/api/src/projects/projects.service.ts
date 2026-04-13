import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectsRepository: ProjectsRepository,
    private readonly storageService: StorageService,
  ) {}

  findAll() {
    return this.projectsRepository.findAll();
  }

  create(dto: CreateProjectDto) {
    return this.projectsRepository.create(dto);
  }

  findOne(projectId: string) {
    return this.projectsRepository.findOne(projectId);
  }

  findResults(projectId: string) {
    return this.projectsRepository.findResults(projectId);
  }

  async uploadModule(
    projectId: string,
    moduleCode: string,
    file: {
      originalname: string;
      mimetype: string;
      size: number;
      buffer: Buffer;
    },
  ) {
    const key = this.storageService.createObjectKey(
      `uploads/modules/${projectId}/${moduleCode}`,
      file.originalname,
    );
    const storedObject = await this.storageService.uploadPublicBuffer({
      key,
      buffer: file.buffer,
      contentType: file.mimetype,
    });

    return this.projectsRepository.attachModuleUpload(projectId, moduleCode, {
      fileName: file.originalname,
      contentType: file.mimetype,
      fileSize: file.size,
      objectKey: storedObject.objectKey,
      publicUrl: storedObject.publicUrl,
    });
  }
}
