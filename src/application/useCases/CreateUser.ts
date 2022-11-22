import { Id } from 'src/domain/core/Id';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { HasherAdapter } from '../adapters/hasherAdapter';

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasher: HasherAdapter,
  ) {}

  async execute(input: CreateUserDto): Promise<Id> {
    const existUser = await this.userRepository.getByEmail(input.email);

    if (existUser) {
      throw new Error('User already exist');
    }

    const user = new User(input.name, input.email, input.password);

    const passwordHash = this.hasher.hash(user.password);
    await this.userRepository.save({ ...user, password: passwordHash });
    return user.id;
  }
}
