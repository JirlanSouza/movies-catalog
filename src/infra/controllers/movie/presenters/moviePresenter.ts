import { ApiProperty } from '@nestjs/swagger';
import { Movie } from 'src/domain/entities/Movie';

export class MoviePresenter {
  @ApiProperty({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' })
  id: string;

  @ApiProperty({ required: true, example: 'Titanic' })
  title: string;

  @ApiProperty({ required: true, example: 'Drama' })
  genre: string;

  @ApiProperty({
    required: true,
    example:
      'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
  })
  overview: string;

  @ApiProperty({ required: true, example: 'Paramount Pictures' })
  company: string;

  @ApiProperty({
    required: true,
    example: new Date('1997-12-19T00:00:00.000').toLocaleDateString('pt-br'),
  })
  releaseDate: string;

  @ApiProperty({ example: 8 })
  votesAvg: number;

  @ApiProperty({ example: 18264 })
  votesCount: number;

  @ApiProperty({
    example:
      'https://movies-catalog.com/data/movies/f419874f-1b85-4f83-9643-319a09dc674c',
  })
  runtimeUrl: string;

  constructor(data: Movie) {
    this.id = data.id.value;
    this.title = data.title;
    this.genre = data.genre;
    this.overview = data.overview;
    this.company = data.company;
    this.releaseDate = data.releaseDate.toLocaleString('pt-br');
    this.votesAvg = data.votesAvg;
    this.votesCount = data.votesCount;
    this.runtimeUrl = data.runtimeUrl;
  }
}
