import { Entity } from '../core/Entity';

export class Movie extends Entity {
  readonly title: string;
  readonly genre: string;
  readonly overview: string;
  readonly company: string;
  readonly releseDate: Date;
  readonly votesAvg: number;
  readonly votesCount: number;
  readonly runtimeUrl: string;

  constructor(
    data: {
      title: string;
      genre: string;
      overview: string;
      company: string;
      releseDate: Date;
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
    this.releseDate = data.releseDate;
    this.votesAvg = data.votesAvg;
    this.votesCount = data.votesCount;
    this.runtimeUrl = data.runtimeUrl;
  }
}
