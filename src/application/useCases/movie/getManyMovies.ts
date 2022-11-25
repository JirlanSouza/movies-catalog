import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';

export class GetManyMoviesUseCase {
  constructor(private readonly moviesRepository: MoviesReposiotry) {}

  async execute() {
    const movies = await this.moviesRepository.getAll();
    return movies;
  }
}
