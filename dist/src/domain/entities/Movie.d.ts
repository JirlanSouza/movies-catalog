import { Entity } from '../core/Entity';
export declare class Movie extends Entity {
    readonly title: string;
    readonly genre: string;
    readonly overview: string;
    readonly company: string;
    readonly releseDate: Date;
    readonly votesAvg: number;
    readonly votesCount: number;
    readonly runtimeUrl: string;
    constructor(data: {
        title: string;
        genre: string;
        overview: string;
        company: string;
        releseDate: Date | string | number;
        votesAvg: number;
        votesCount: number;
        runtimeUrl: string;
    }, id?: string);
}
