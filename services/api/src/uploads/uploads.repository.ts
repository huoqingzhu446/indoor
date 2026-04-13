import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UploadsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUploadTicket(input: {
    fileName: string;
    contentType: string;
    fileSize: number;
    objectKey: string;
    publicUrl: string;
  }) {
    return this.prisma.uploadTicket.create({
      data: {
        fileName: input.fileName,
        contentType: input.contentType,
        fileSize: input.fileSize,
        objectKey: input.objectKey,
        publicUrl: input.publicUrl,
        expiresIn: 3600,
      },
    });
  }

  async createStoredUploadRecord(input: {
    fileName: string;
    contentType: string;
    fileSize: number;
    objectKey: string;
    publicUrl: string;
  }) {
    return this.prisma.uploadTicket.create({
      data: {
        fileName: input.fileName,
        contentType: input.contentType,
        fileSize: input.fileSize,
        objectKey: input.objectKey,
        publicUrl: input.publicUrl,
        expiresIn: 3600,
        status: 'uploaded',
      },
    });
  }
}
