import { CreateUserDto } from 'src/application/useCases/user/CreateUser';
export declare class CreateUserControllerDto implements CreateUserDto {
    name: string;
    email: string;
    password: string;
}
