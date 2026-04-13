import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateShareDto {
  @ApiProperty({ example: '604 奶油风效果图方案' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  title!: string;

  @ApiProperty({ example: '适合客户初看风格方向和空间氛围。' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(240)
  description!: string;
}
