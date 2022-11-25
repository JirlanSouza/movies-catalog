import { Id } from 'src/domain/core/Id';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { MovieModel } from 'src/infra/models/movie-model';
import { Repository } from 'typeorm';
export declare class TypeormMoviesReoisitory implements MoviesReposiotry {
    private readonly moviesModelRepository;
    constructor(moviesModelRepository: Repository<MovieModel>);
    getByTitle(title: string): Promise<Movie>;
    save(entity: Movie): Promise<Movie>;
    update(id: Id, entity: Movie): Promise<Movie>;
    getById(id: Id): Promise<Movie>;
    getAll(): Promise<Movie[]>;
    delete(id: Id): Promise<void>;
    private movieModelToMovie;
    private movieToMovieModel;
}
