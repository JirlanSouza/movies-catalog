export interface CreateMovieDto {
    title: string;
    genre: string;
    overview: string;
    company: string;
    releaseDate: Date | string;
    votesAvg: number;
    votesCount: number;
    runtimeUrl: string;
}
