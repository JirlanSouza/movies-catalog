import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { HasherAdapter } from '../../adapters/hasherAdapter';
import { AlreadyExistExeption } from '../../exceptions/alreadyExist';
import { ApplicationLogger } from '../../logger/logger';
import { UserWithOutPassword } from './UserDto';

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasher: HasherAdapter,
    private readonly logger: ApplicationLogger,
  ) {}

  async execute(input: CreateUserDto): Promise<UserWithOutPassword> {
    const existUser = await this.userRepository.getByEmail(input.email);

    if (existUser) {
      throw new AlreadyExistExeption('User already exist');
    }

    const user = new User(input.name, input.email, input.password);

    const passwordHash = this.hasher.hash(user.password);
    await this.userRepository.save({ ...user, password: passwordHash });
    this.logger.log('CreateUserUseCase execute', 'New user has been created');
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
