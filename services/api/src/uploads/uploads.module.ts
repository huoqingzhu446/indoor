import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsRepository } from './uploads.repository';
import { UploadsService } from './uploads.service';

@Module({
  controllers: [UploadsController],
  providers: [UploadsRepository, UploadsService],
})
export class UploadsModule {}
