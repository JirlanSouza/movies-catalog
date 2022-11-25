import { DoesNotExist } from 'src/application/exceptions/doesExistException';
import { ApplicationLogger } from 'src/application/logger/logger';
import { Id } from 'src/domain/core/Id';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';

export class DeleteMovieUseCase {
  constructor(
    private readonly moviesRepository: MoviesReposiotry,
    private readonly logger: ApplicationLogger,
  ) {}

  async execute(movieId: string) {
    const id = Id.from(movieId);
    const movie = await this.moviesRepository.getById(id);

    if (!movie) {
      throw new DoesNotExist('This movie does not exist');
    }

    await this.moviesRepository.delete(id);
    this.logger.log(
      'DeletemovieUseCase execute',
      `The movie with id: ${id.value} has been deleted`,
    );
  }
}
