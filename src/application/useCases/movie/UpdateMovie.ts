import { DoesNotExist } from 'src/application/exceptions/doesExistException';
import { ApplicationLogger } from 'src/application/logger/logger';
import { Id } from 'src/domain/core/Id';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { UpdateMovieDto } from './UpdateMovieDto';

export class UpdateMovieUseCase {
  constructor(
    private readonly moviesrepository: MoviesReposiotry,
    private readonly logger: ApplicationLogger,
  ) {}

  async execute(movieId: string, data: UpdateMovieDto) {
    const id = Id.from(movieId);
    const movie = await this.moviesrepository.getById(id);

    if (!movie) {
      throw new DoesNotExist('This movie does not exist');
    }

    const updatedMovie = new Movie(data, id.value);

    await this.moviesrepository.update(id, updatedMovie);
    this.logger.log(
      'UpdateMovieUseCase execute',
      `The movie with id: ${id.value} has been updated`,
    );
    return updatedMovie;
  }
}
