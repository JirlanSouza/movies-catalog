import { HasherAdapter } from 'src/application/adapters/hasherAdapter';
import { JwtAdapter } from 'src/application/adapters/jwtAdapter';
import { ApplicationLogger } from 'src/application/logger/logger';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { SignInDto, SignInResultDto } from './AuthDtos';
export declare class SignInUseCase {
    private readonly usersRepository;
    private readonly hasher;
    private readonly jwt;
    private readonly logger;
    constructor(usersRepository: UserRepository, hasher: HasherAdapter, jwt: JwtAdapter, logger: ApplicationLogger);
    execute(data: SignInDto): Promise<SignInResultDto>;
}
