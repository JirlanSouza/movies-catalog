import { Id } from 'src/domain/core/Id';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { HasherAdapter } from '../adapters/hasherAdapter';
import { ApplicationLogger } from '../logger/logger';
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class CreateUserUseCase {
    private readonly userRepository;
    private readonly hasher;
    private readonly logger;
    constructor(userRepository: UserRepository, hasher: HasherAdapter, logger: ApplicationLogger);
    execute(input: CreateUserDto): Promise<Id>;
}
