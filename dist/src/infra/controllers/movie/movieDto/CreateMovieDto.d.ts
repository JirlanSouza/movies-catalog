import { CreateMovieDto } from 'src/application/useCases/movie/CreateMovieDto';
export declare class CreateMovieControllerDto implements CreateMovieDto {
    title: string;
    genre: string;
    overview: string;
    company: string;
    releseDate: Date;
    votesAvg: number;
    votesCount: number;
    runtimeUrl: string;
}
