import { BaseEntity } from 'typeorm';
export declare class MovieModel extends BaseEntity {
    id: string;
    title: string;
    genre: string;
    overview: string;
    company: string;
    releseDate: Date;
    votesAvg: number;
    votesCount: number;
    runtimeUrl: string;
}
