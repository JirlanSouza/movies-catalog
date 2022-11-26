import { Entity } from '../core/Entity';

export class Movie extends Entity {
  readonly title: string;
  readonly genre: string;
  readonly overview: string;
  readonly company: string;
  readonly releaseDate: Date;
  readonly votesAvg: number;
  readonly votesCount: number;
  readonly runtimeUrl: string;

  constructor(
    data: {
      title: string;
      genre: string;
      overview: string;
      company: string;
      releaseDate: Date | string | number;
      votesAvg: number;
      votesCount: number;
      runtimeUrl: string;
    },
    id?: string,
  ) {
    super(id);
    this.title = data.title;
    this.genre = data.genre;
    this.overview = data.overview;
    this.company = data.company;
    this.releaseDate = new Date(data.releaseDate);
    this.votesAvg = data.votesAvg;
    this.votesCount = data.votesCount;
    this.runtimeUrl = data.runtimeUrl;
  }
}
