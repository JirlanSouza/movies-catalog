import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetMovieParamsDto {
  @ApiProperty({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' })
  @IsUUID(4)
  id: string;
}
