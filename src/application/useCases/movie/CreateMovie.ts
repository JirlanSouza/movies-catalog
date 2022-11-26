import { AlreadyExistExeption } from 'src/application/exceptions/alreadyExist';
import { ApplicationLogger } from 'src/application/logger/logger';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { CreateMovieDto } from './CreateMovieDto';

export class CreateMovieUseCase {
  constructor(
    private readonly moviesRepository: MoviesReposiotry,
    private readonly logger: ApplicationLogger,
  ) {}

  async execute(data: CreateMovieDto): Promise<Movie> {
    const existMovie = await this.moviesRepository.getByTitle(data.title);

    if (existMovie) {
      throw new AlreadyExistExeption('Movie already exist');
    }

    const movieReleaseDate = new Date(data.releaseDate);

    const movie = new Movie({ ...data, releaseDate: movieReleaseDate });
    await this.moviesRepository.save(movie);
    this.logger.log(
      'CreateMovieUseCase execute',
      'The new movie has been created',
    );
    return movie;
  }
}
