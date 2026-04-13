import { Injectable } from '@nestjs/common';
import { CreateShareDto } from './dto/create-share.dto';
import { SharesRepository } from './shares.repository';

@Injectable()
export class SharesService {
  constructor(private readonly sharesRepository: SharesRepository) {}

  findAll() {
    return this.sharesRepository.listAll();
  }

  create(projectId: string, dto: CreateShareDto) {
    return this.sharesRepository.create(projectId, dto);
  }

  findOne(shareCode: string) {
    return this.sharesRepository.getSnapshot(shareCode);
  }
}
