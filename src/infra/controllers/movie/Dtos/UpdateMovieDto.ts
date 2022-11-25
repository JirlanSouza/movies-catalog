import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { UpdateMovieDto } from 'src/application/useCases/movie/UpdateMovieDto';

export class UpdateMovieParamsDto {
  @ApiProperty()
  @IsUUID(4)
  id: string;
}

export class UpdateMovieControllerDto implements UpdateMovieDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  genre: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  overview: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  company: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  releseDate: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  votesAvg: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  votesCount: number;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  runtimeUrl: string;
}
