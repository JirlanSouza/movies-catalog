import { InjectRepository } from '@nestjs/typeorm';
import { Id } from 'src/domain/core/Id';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { MovieModel } from 'src/infra/models/movie-model';
import { Repository } from 'typeorm';

export class TypeormMoviesReoisitory implements MoviesReposiotry {
  constructor(
    @InjectRepository(MovieModel)
    private readonly moviesModelRepository: Repository<MovieModel>,
  ) {}
  async getByTitle(title: string): Promise<Movie> {
    const movieModel = await this.moviesModelRepository.findOneBy({ title });

    if (movieModel) {
      return this.movieModelToMovie(movieModel);
    }
  }

  async save(entity: Movie): Promise<Movie> {
    const movieModel = this.movieToMovieModel(entity);
    const savedMovieModel = await movieModel.save();

    if (savedMovieModel) {
      return entity;
    }
  }

  async update(id: Id, entity: Movie): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  async getById(id: Id): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<Movie[]> {
    throw new Error('Method not implemented.');
  }

  async delete(id: Id): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private movieModelToMovie(movieModel: MovieModel) {
    return new Movie({ ...movieModel }, movieModel.id);
  }

  private movieToMovieModel(movie: Movie) {
    const movieModel = new MovieModel();
    movieModel.id = movie.id.value;
    movieModel.title = movie.title;
    movieModel.genre = movie.genre;
    movieModel.overview = movie.overview;
    movieModel.company = movie.company;
    movieModel.releseDate = movie.releseDate;
    movieModel.votesAvg = movie.votesAvg;
    movieModel.votesCount = movie.votesCount;
    movieModel.runtimeUrl = movie.runtimeUrl;

    return movieModel;
  }
}
