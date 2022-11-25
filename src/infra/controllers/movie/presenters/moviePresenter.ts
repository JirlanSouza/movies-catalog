import { ApiProperty } from '@nestjs/swagger';
import { Movie } from 'src/domain/entities/Movie';

export class MoviePresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  genre: string;

  @ApiProperty()
  overview: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  releseDate: string;

  @ApiProperty()
  votesAvg: number;

  @ApiProperty()
  votesCount: number;

  @ApiProperty()
  runtimeUrl: string;

  constructor(data: Movie) {
    this.id = data.id.value;
    this.title = data.title;
    this.genre = data.genre;
    this.overview = data.overview;
    this.company = data.company;
    this.releseDate = data.releseDate.toLocaleString('pt-br');
    this.votesAvg = data.votesAvg;
    this.votesCount = data.votesCount;
    this.runtimeUrl = data.runtimeUrl;
  }
}
