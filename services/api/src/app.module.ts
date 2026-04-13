import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ProjectsModule } from './projects/projects.module';
import { PrismaModule } from './prisma/prisma.module';
import { RenderQueueModule } from './queue/render-queue.module';
import { RenderTasksModule } from './render-tasks/render-tasks.module';
import { SharesModule } from './shares/shares.module';
import { StorageModule } from './storage/storage.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    PrismaModule,
    RenderQueueModule,
    StorageModule,
    UploadsModule,
    ProjectsModule,
    RenderTasksModule,
    SharesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
