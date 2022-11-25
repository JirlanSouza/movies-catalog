import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
export declare class GetMovieUseCase {
    private readonly moviesRepository;
    constructor(moviesRepository: MoviesReposiotry);
    execute(movieId: string): Promise<import("../../../domain/entities/Movie").Movie>;
}
