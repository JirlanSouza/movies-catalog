import { Movie } from 'src/domain/entities/Movie';
import { MoviePresenter } from './moviePresenter';
export declare class ManyMoviesPresenter {
    readonly total: number;
    readonly nextUrl: string;
    readonly data: MoviePresenter[];
    constructor(movies: Movie[]);
}
