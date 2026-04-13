import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: '604 客厅首版方案' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  name!: string;

  @ApiProperty({ example: '客厅' })
  @IsString()
  @IsNotEmpty()
  roomType!: string;

  @ApiProperty({ example: 'https://example.com/uploads/room.jpg' })
  @IsUrl()
  originalImageUrl!: string;

  @ApiPropertyOptional({ example: 'upl_xxx' })
  @IsOptional()
  @IsString()
  uploadId?: string;

  @ApiProperty({ example: 'cream' })
  @IsString()
  @IsNotEmpty()
  styleCode!: string;

  @ApiProperty({ example: '中' })
  @IsString()
  @IsNotEmpty()
  budgetLevel!: string;

  @ApiProperty({ type: [String], example: ['保留门窗位置', '不改房型'] })
  @IsArray()
  @IsString({ each: true })
  constraints!: string[];
}
