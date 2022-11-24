import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/application/useCases/CreateUser';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ExceptionPresenter } from '../exceptionPresenter';
import { CreateUserControllerDto } from './UserDto';
import { CreateUserPresenter } from './userPresenter';

@ApiTags('users')
@ApiResponse({ status: 500, type: ExceptionPresenter })
@Controller('users')
export class UserController {
  constructor(
    @Inject(UseCasesProxyModule.CREATE_USER_USECASE_PROXY)
    private readonly createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>,
  ) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateUserPresenter })
  @ApiResponse({ status: 400, type: ExceptionPresenter })
  @ApiResponse({ status: 409, type: ExceptionPresenter })
  async createUser(@Body() createUserDto: CreateUserControllerDto) {
    const createUserResult = await this.createUserUseCaseProxy
      .getInstance()
      .execute(createUserDto);

    return { userId: createUserResult.value };
  }
}
