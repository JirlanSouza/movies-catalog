import { ApplicationLogger } from 'src/application/logger/logger';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { CreateMovieDto } from './CreateMovieDto';
export declare class CreateMovieUseCase {
    private readonly moviesRepository;
    private readonly logger;
    constructor(moviesRepository: MoviesReposiotry, logger: ApplicationLogger);
    execute(data: CreateMovieDto): Promise<Movie>;
}
