import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateRenderTaskDto {
  @ApiProperty({ example: 'cream' })
  @IsString()
  @IsNotEmpty()
  styleCode!: string;

  @ApiProperty({ example: '中' })
  @IsString()
  @IsNotEmpty()
  budgetLevel!: string;

  @ApiProperty({ type: [String], example: ['保留门窗位置', '偏软装方案'] })
  @IsArray()
  @IsString({ each: true })
  constraints!: string[];

  @ApiProperty({ example: 4 })
  @IsInt()
  @Min(1)
  @Max(6)
  candidateCount!: number;
}
