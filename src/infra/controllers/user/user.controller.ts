import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  CreateUserDto,
  CreateUserUseCase,
} from 'src/application/useCases/CreateUser';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UseCasesProxyModule.CREATE_USER_USECASE_PROXY)
    private readonly createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createUserResult = await this.createUserUseCaseProxy
      .getInstance()
      .execute(createUserDto);

    return { userId: createUserResult.value };
  }
}
