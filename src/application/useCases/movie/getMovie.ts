import { Id } from 'src/domain/core/Id';
import { DoesNotExist } from 'src/application/exceptions/doesExistException';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';

export class GetMovieUseCase {
  constructor(private readonly moviesRepository: MoviesReposiotry) {}

  async execute(movieId: string) {
    const id = Id.from(movieId);
    const movie = await this.moviesRepository.getById(id);

    if (!movie) {
      throw new DoesNotExist('This movie does not exist');
    }

    return movie;
  }
}
