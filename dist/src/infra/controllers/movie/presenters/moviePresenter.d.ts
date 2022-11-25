import { Movie } from 'src/domain/entities/Movie';
export declare class MoviePresenter {
    id: string;
    title: string;
    genre: string;
    overview: string;
    company: string;
    releseDate: string;
    votesAvg: number;
    votesCount: number;
    runtimeUrl: string;
    constructor(data: Movie);
}
