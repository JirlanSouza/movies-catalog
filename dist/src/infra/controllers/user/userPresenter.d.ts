import { UserWithOutPassword } from 'src/application/useCases/user/UserDto';
export declare class CreateUserPresenter {
    id: string;
    name: string;
    email: string;
    constructor(data: UserWithOutPassword);
}
