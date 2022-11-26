import { ApplicationLogger } from 'src/application/logger/logger';
import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
export declare class DeleteMovieUseCase {
    private readonly moviesRepository;
    private readonly logger;
    constructor(moviesRepository: MoviesReposiotry, logger: ApplicationLogger);
    execute(movieId: string): Promise<void>;
}
