import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUploadPolicyDto {
  @ApiProperty({ example: 'room-living.jpg' })
  @IsString()
  @IsNotEmpty()
  fileName!: string;

  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  @IsNotEmpty()
  contentType!: string;

  @ApiProperty({ example: 2048000 })
  @IsInt()
  @Min(0)
  @Max(50 * 1024 * 1024)
  fileSize!: number;
}
