import { SignInResultDto } from 'src/application/useCases/auth/AuthDtos';
declare class SignedUserPresenter {
    id: string;
    name: string;
    email: string;
}
export declare class SignInPresenter implements SignInResultDto {
    user: SignedUserPresenter;
    token: string;
    constructor(data: SignInResultDto);
}
export {};
