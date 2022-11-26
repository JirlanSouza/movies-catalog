import { UpdateMovieDto } from 'src/application/useCases/movie/UpdateMovieDto';
export declare class UpdateMovieParamsDto {
    id: string;
}
export declare class UpdateMovieControllerDto implements UpdateMovieDto {
    title: string;
    genre: string;
    overview: string;
    company: string;
    releaseDate: Date;
    votesAvg: number;
    votesCount: number;
    runtimeUrl: string;
}
