import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class FailRenderTaskDto {
  @ApiProperty({ example: 'MiniMax image generation failed with 401' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(400)
  errorMessage!: string;
}
