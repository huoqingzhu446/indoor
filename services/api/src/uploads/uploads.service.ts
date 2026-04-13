import { Injectable } from '@nestjs/common';
import { CreateUploadPolicyDto } from './dto/create-upload-policy.dto';
import { StorageService } from '../storage/storage.service';
import { UploadsRepository } from './uploads.repository';

@Injectable()
export class UploadsService {
  constructor(
    private readonly uploadsRepository: UploadsRepository,
    private readonly storageService: StorageService,
  ) {}

  async createPolicy(dto: CreateUploadPolicyDto) {
    const key = this.storageService.createObjectKey('uploads/originals', dto.fileName);
    const objectKey = this.storageService.buildStoredObjectKey(
      this.storageService.getPublicBucket(),
      key,
    );
    const publicUrl = this.storageService.buildPublicUrl(
      this.storageService.getPublicBucket(),
      key,
    );

    const upload = await this.uploadsRepository.createUploadTicket({
      fileName: dto.fileName,
      contentType: dto.contentType,
      fileSize: dto.fileSize,
      objectKey,
      publicUrl,
    });

    return {
      uploadId: upload.id,
      objectKey: upload.objectKey,
      publicUrl: upload.publicUrl,
      contentType: upload.contentType,
      expiresIn: upload.expiresIn,
    };
  }

  async uploadFile(file: {
    originalname: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
  }) {
    const key = this.storageService.createObjectKey(
      'uploads/originals',
      file.originalname,
    );
    const storedObject = await this.storageService.uploadPublicBuffer({
      key,
      buffer: file.buffer,
      contentType: file.mimetype,
    });

    const upload = await this.uploadsRepository.createStoredUploadRecord({
      fileName: file.originalname,
      contentType: file.mimetype,
      fileSize: file.size,
      objectKey: storedObject.objectKey,
      publicUrl: storedObject.publicUrl,
    });

    return {
      uploadId: upload.id,
      objectKey: upload.objectKey,
      publicUrl: upload.publicUrl,
      contentType: upload.contentType,
      expiresIn: upload.expiresIn,
    };
  }
}
