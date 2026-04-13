import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('system')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'API health and entry information' })
  getHealth() {
    return {
      service: 'room-ai-api',
      status: 'ok',
      docs: '/docs',
      version: '0.1.0',
    };
  }
}
