import { CreateUserDto } from 'src/application/useCases/CreateUser';
export declare class CreateUserControllerDto implements CreateUserDto {
    name: string;
    email: string;
    password: string;
}
