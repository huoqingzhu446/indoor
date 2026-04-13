import { Global, Module } from '@nestjs/common';
import { InternalTokenGuard } from './guards/internal-token.guard';

@Global()
@Module({
  providers: [InternalTokenGuard],
  exports: [InternalTokenGuard],
})
export class CommonModule {}
