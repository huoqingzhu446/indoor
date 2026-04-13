import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InternalTokenGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext) {
    const expected = this.configService.get<string>('INTERNAL_SERVICE_TOKEN');

    if (!expected) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{ headers: Record<string, string | string[]> }>();
    const received = request.headers['x-internal-token'];
    const token = Array.isArray(received) ? received[0] : received;

    if (token !== expected) {
      throw new UnauthorizedException('Invalid internal service token');
    }

    return true;
  }
}
