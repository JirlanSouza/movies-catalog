import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { CreateMovieDto } from 'src/application/useCases/movie/CreateMovieDto';

export class CreateMovieControllerDto implements CreateMovieDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  overview: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({ required: true })
  @IsDateString()
  @IsNotEmpty()
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
