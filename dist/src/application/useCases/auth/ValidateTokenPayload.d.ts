import { JwtPayload } from 'src/application/adapters/jwtAdapter';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { ValidateTokenPayloadResultDto } from './AuthDtos';
export declare class ValidateTokenPayloadUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UserRepository);
    execute(payload: JwtPayload): Promise<ValidateTokenPayloadResultDto | undefined>;
}
