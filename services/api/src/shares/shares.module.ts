import { Module } from '@nestjs/common';
import { PublicShareController } from './public-share.controller';
import { SharesController } from './shares.controller';
import { SharesRepository } from './shares.repository';
import { SharesService } from './shares.service';

@Module({
  controllers: [SharesController, PublicShareController],
  providers: [SharesRepository, SharesService],
})
export class SharesModule {}
