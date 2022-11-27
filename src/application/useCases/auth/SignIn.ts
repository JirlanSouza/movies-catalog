import { HasherAdapter } from 'src/application/adapters/hasherAdapter';
import { JwtAdapter } from 'src/application/adapters/jwtAdapter';
import { IncorrectEmailOrPassword } from 'src/application/exceptions/IncorrectEmailOrPassword';
import { ApplicationLogger } from 'src/application/logger/logger';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { SignInDto, SignInResultDto } from './AuthDtos';

export class SignInUseCase {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly hasher: HasherAdapter,
    private readonly jwt: JwtAdapter,
    private readonly logger: ApplicationLogger,
  ) {}

  async execute(data: SignInDto): Promise<SignInResultDto> {
    const user = await this.usersRepository.getByEmail(data.email);

    if (!user) {
      throw new IncorrectEmailOrPassword();
    }

    const isMatchPassword = this.hasher.compare(data.password, user.password);

    if (!isMatchPassword) {
      throw new IncorrectEmailOrPassword();
    }

    const token = this.jwt.signIn({ userId: user.id.value });

    return {
      user: {
        id: user.id.value,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
