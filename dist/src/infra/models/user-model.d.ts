import { BaseEntity } from 'typeorm';
export declare class UserModel extends BaseEntity {
    id: string;
    name: string;
    email: string;
    password: string;
}
