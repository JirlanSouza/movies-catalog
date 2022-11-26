import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('movies')
export class MovieModel extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  overview: string;

  @Column()
  company: string;

  @Column()
  releaseDate: Date;

  @Column()
  votesAvg: number;

  @Column()
  votesCount: number;

  @Column()
  runtimeUrl: string;
}
