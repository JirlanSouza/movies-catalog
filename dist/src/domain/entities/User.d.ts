import { Entity } from '../core/Entity';
export declare class User extends Entity {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    constructor(name: string, email: string, password: string, id?: string);
}
