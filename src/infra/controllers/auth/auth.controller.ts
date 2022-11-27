import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInUseCase } from 'src/application/useCases/auth/SignIn';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { BadRequestPresenter, ExceptionPresenter } from '../exceptionPresenter';
import { SignInControllerDto } from './dtos/SignInDto';
import { SignInPresenter } from './presenters/SignInPresenter';

@ApiTags('Auth')
@ApiResponse({ status: 500, type: ExceptionPresenter })
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(UseCasesProxyModule.proxy.SIGNIN_USECASE)
    private readonly signInUseCaseProxy: UseCaseProxy<SignInUseCase>,
  ) {}

  @ApiResponse({ status: 201, type: SignInPresenter })
  @ApiResponse({ status: 400, type: BadRequestPresenter })
  @Post()
  async signIn(@Body() creadentials: SignInControllerDto) {
    const signInResult = await this.signInUseCaseProxy
      .getInstance()
      .execute(creadentials);

    return new SignInPresenter(signInResult);
  }
}
