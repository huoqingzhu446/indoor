import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { normalizePublicBaseUrl } from '../uploads/uploads.utils';

@Controller()
export class PublicShareController {
  constructor(private readonly configService: ConfigService) {}

  @Get('share/:shareCode')
  @Redirect()
  redirectToWebShare(@Param('shareCode') shareCode: string) {
    const publicWebBaseUrl = normalizePublicBaseUrl(
      this.configService.get<string>('PUBLIC_WEB_BASE_URL') ?? 'http://localhost:5175',
    ).replace(/\/$/, '');

    return {
      url: `${publicWebBaseUrl}/share/${shareCode}`,
      statusCode: 302,
    };
  }
}
