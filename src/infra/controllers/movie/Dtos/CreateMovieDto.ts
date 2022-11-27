import { ApiProperty } from '@nestjs/swagger';
import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { CreateMovieDto } from 'src/application/useCases/movie/CreateMovieDto';

export class CreateMovieControllerDto implements CreateMovieDto {
  @ApiProperty({ required: true, example: 'Titanic' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true, example: 'Drama' })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    required: true,
    example:
      'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
  })
  @IsString()
  @IsNotEmpty()
  overview: string;

  @ApiProperty({ required: true, example: 'Paramount Pictures' })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({
    required: true,
    example: new Date('1997-12-19T00:00:00.000').toISOString(),
  })
  @IsISO8601()
  @IsNotEmpty()
  releaseDate: Date;

  @ApiProperty({ example: 8 })
  @IsOptional()
  @IsNumber()
  votesAvg: number;

  @ApiProperty({ example: 18264 })
  @IsOptional()
  @IsNumber()
  votesCount: number;

  @ApiProperty({
    example:
      'https://movies-catalog.com/data/movies/f419874f-1b85-4f83-9643-319a09dc674c',
  })
  @IsOptional()
  @IsUrl()
  runtimeUrl: string;
}
