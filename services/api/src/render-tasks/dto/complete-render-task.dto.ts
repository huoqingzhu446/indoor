import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

class RenderCandidateDto {
  @ApiProperty({ example: '客厅 · 方案 1' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'https://example.com/render-1.png' })
  @IsUrl()
  imageUrl!: string;

  @ApiProperty({ example: 93 })
  @IsNumber()
  score!: number;
}

export class CompleteRenderTaskDto {
  @ApiProperty({ example: 'minimax' })
  @IsString()
  @IsNotEmpty()
  providerCode!: string;

  @ApiProperty({ example: 'image-01-live' })
  @IsString()
  @IsNotEmpty()
  modelCode!: string;

  @ApiPropertyOptional({ example: 'MiniMax-M2.7' })
  @IsOptional()
  @IsString()
  textModel?: string;

  @ApiPropertyOptional({ example: '现代奶油风客厅...' })
  @IsOptional()
  @IsString()
  promptPreview?: string;

  @ApiProperty({ type: [RenderCandidateDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RenderCandidateDto)
  candidates!: RenderCandidateDto[];
}
