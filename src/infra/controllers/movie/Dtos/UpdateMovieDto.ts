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
  @ApiProperty({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' })
  @IsUUID(4)
  id: string;
}

export class UpdateMovieControllerDto implements UpdateMovieDto {
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
    example: new Date('1997-12-19T00:00:00.000').toLocaleDateString('pt-br'),
  })
  @IsDateString()
  @IsNotEmpty()
  releaseDate: Date;

  @ApiProperty({ required: true, example: 8 })
  @IsNotEmpty()
  @IsNumber()
  votesAvg: number;

  @ApiProperty({ required: true, example: 18264 })
  @IsNotEmpty()
  @IsNumber()
  votesCount: number;

  @ApiProperty({
    required: true,
    example:
      'https://movies-catalog.com/data/movies/f419874f-1b85-4f83-9643-319a09dc674c',
  })
  @IsNotEmpty()
  @IsUrl()
  runtimeUrl: string;
}
