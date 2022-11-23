import { CreateUserDto, CreateUserUseCase } from 'src/application/useCases/CreateUser';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
export declare class UserController {
    private readonly createUserUseCaseProxy;
    constructor(createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>);
    createUser(createUserDto: CreateUserDto): Promise<{
        userId: string;
    }>;
}
