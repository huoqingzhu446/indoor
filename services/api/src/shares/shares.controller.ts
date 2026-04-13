import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateShareDto } from './dto/create-share.dto';
import { SharesService } from './shares.service';

@ApiTags('shares')
@Controller('v1')
export class SharesController {
  constructor(private readonly sharesService: SharesService) {}

  @Get('shares')
  @ApiOperation({ summary: 'List share links' })
  findAll() {
    return this.sharesService.findAll();
  }

  @Post('projects/:projectId/share')
  @ApiOperation({ summary: 'Create a public share link for a project' })
  create(@Param('projectId') projectId: string, @Body() dto: CreateShareDto) {
    return this.sharesService.create(projectId, dto);
  }

  @Get('shares/:shareCode')
  @ApiOperation({ summary: 'Get public share snapshot' })
  findOne(@Param('shareCode') shareCode: string) {
    return this.sharesService.findOne(shareCode);
  }
}
