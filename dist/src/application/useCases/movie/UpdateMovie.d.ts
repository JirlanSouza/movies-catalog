import { ApplicationLogger } from 'src/application/logger/logger';
import { Movie } from 'src/domain/entities/Movie';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
import { UpdateMovieDto } from './UpdateMovieDto';
export declare class UpdateMovieUseCase {
    private readonly moviesrepository;
    private readonly logger;
    constructor(moviesrepository: MoviesReposiotry, logger: ApplicationLogger);
    execute(movieId: string, data: UpdateMovieDto): Promise<Movie>;
}
