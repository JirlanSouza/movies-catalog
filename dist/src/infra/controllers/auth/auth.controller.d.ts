import { SignInUseCase } from 'src/application/useCases/auth/SignIn';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { SignInControllerDto } from './dtos/SignInDto';
import { SignInPresenter } from './presenters/SignInPresenter';
export declare class AuthController {
    private readonly signInUseCaseProxy;
    constructor(signInUseCaseProxy: UseCaseProxy<SignInUseCase>);
    signIn(creadentials: SignInControllerDto): Promise<SignInPresenter>;
}
