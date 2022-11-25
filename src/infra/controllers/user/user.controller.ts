import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/application/useCases/user/CreateUser';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ExceptionPresenter } from '../exceptionPresenter';
import { CreateUserControllerDto } from './CreateUserDto';
import { CreateUserPresenter } from './userPresenter';

@ApiTags('users')
@ApiResponse({ status: 500, type: ExceptionPresenter })
@Controller('users')
export class UserController {
  constructor(
    @Inject(UseCasesProxyModule.proxy.CREATE_USER_USECASE)
    private readonly createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>,
  ) {}

  @ApiResponse({ status: 201, type: CreateUserPresenter })
  @ApiResponse({ status: 400, type: ExceptionPresenter })
  @ApiResponse({ status: 409, type: ExceptionPresenter })
  @ApiOperation({ description: 'Create new user' })
  @Post()
  async createUser(@Body() createUserDto: CreateUserControllerDto) {
    const createUserResult = await this.createUserUseCaseProxy
      .getInstance()
      .execute(createUserDto);

    return new CreateUserPresenter(createUserResult);
  }
}
