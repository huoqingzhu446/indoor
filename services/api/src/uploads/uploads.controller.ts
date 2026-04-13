import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CreateUploadPolicyDto } from './dto/create-upload-policy.dto';
import { UploadsService } from './uploads.service';

@ApiTags('uploads')
@Controller('v1/uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('policy')
  @ApiOperation({ summary: 'Create upload policy metadata for a room photo' })
  createPolicy(@Body() dto: CreateUploadPolicyDto) {
    return this.uploadsService.createPolicy(dto);
  }

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 50 * 1024 * 1024,
      },
    }),
  )
  @ApiOperation({ summary: 'Upload a room photo directly to object storage through the API' })
  uploadFile(@UploadedFile() file: { originalname: string; mimetype: string; size: number; buffer: Buffer }) {
    return this.uploadsService.uploadFile(file);
  }
}
