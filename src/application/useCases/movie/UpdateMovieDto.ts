export interface UpdateMovieDto {
  title: string;
  genre: string;
  overview: string;
  company: string;
  releseDate: Date | string;
  votesAvg: number;
  votesCount: number;
  runtimeUrl: string;
}
