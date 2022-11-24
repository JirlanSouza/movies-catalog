import { CreateUserUseCase } from 'src/application/useCases/CreateUser';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { CreateUserControllerDto } from './UserDto';
export declare class UserController {
    private readonly createUserUseCaseProxy;
    constructor(createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>);
    createUser(createUserDto: CreateUserControllerDto): Promise<{
        userId: string;
    }>;
}
