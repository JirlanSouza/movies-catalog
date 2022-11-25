import { MoviesReposiotry } from 'src/domain/repositories/MovieRepositry';
export declare class GetManyMoviesUseCase {
    private readonly moviesRepository;
    constructor(moviesRepository: MoviesReposiotry);
    execute(): Promise<import("../../../domain/entities/Movie").Movie[]>;
}
