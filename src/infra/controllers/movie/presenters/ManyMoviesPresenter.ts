import { ApiProperty } from '@nestjs/swagger';
import { Movie } from 'src/domain/entities/Movie';
import { MoviePresenter } from './moviePresenter';

export class ManyMoviesPresenter {
  @ApiProperty()
  readonly total: number;

  @ApiProperty()
  readonly nextUrl: string;

  @ApiProperty({ type: MoviePresenter, isArray: true })
  readonly data: MoviePresenter[];

  constructor(movies: Movie[]) {
    this.data = movies.map((movie) => new MoviePresenter(movie));
  }
}
