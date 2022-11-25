import { CreateUserUseCase } from 'src/application/useCases/user/CreateUser';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { CreateUserControllerDto } from './CreateUserDto';
import { CreateUserPresenter } from './userPresenter';
export declare class UserController {
    private readonly createUserUseCaseProxy;
    constructor(createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>);
    createUser(createUserDto: CreateUserControllerDto): Promise<CreateUserPresenter>;
}
