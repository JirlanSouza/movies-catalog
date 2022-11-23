import { Id } from 'src/domain/core/Id';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { HasherAdapter } from '../adapters/hasherAdapter';
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class CreateUserUseCase {
    private readonly userRepository;
    private readonly hasher;
    constructor(userRepository: UserRepository, hasher: HasherAdapter);
    execute(input: CreateUserDto): Promise<Id>;
}
