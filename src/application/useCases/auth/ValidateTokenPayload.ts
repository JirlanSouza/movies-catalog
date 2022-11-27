import { JwtPayload } from 'src/application/adapters/jwtAdapter';
import { Id } from 'src/domain/core/Id';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { ValidateTokenPayloadResultDto } from './AuthDtos';

export class ValidateTokenPayloadUseCase {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute(
    payload: JwtPayload,
  ): Promise<ValidateTokenPayloadResultDto | undefined> {
    const id = Id.from(payload.userId);
    const user = await this.usersRepository.getById(id);

    if (user) {
      return {
        id: user.id.value,
        name: user.name,
        email: user.email,
      };
    }
  }
}
