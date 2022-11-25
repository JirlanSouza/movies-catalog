import { ApiProperty } from '@nestjs/swagger';
import { CreateMovieDto } from 'src/application/useCases/movie/CreateMovieDto';

export class CreateMovieControllerDto implements CreateMovieDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  genre: string;

  @ApiProperty({ required: true })
  overview: string;

  @ApiProperty({ required: true })
  company: string;

  @ApiProperty({ required: true })
  releseDate: Date;

  @ApiProperty()
  votesAvg: number;

  @ApiProperty()
  votesCount: number;

  @ApiProperty()
  runtimeUrl: string;
}
