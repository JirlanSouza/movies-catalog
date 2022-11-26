import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsNotEmpty,
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
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  overview: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  releaseDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  votesAvg: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  votesCount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  runtimeUrl: string;
}
