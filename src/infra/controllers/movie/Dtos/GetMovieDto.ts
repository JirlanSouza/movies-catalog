import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetMoviesParamsDto {
  @ApiProperty()
  @IsUUID(4)
  id: string;
}
