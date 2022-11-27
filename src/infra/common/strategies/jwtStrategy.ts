import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { EnviromentVariables } from 'src/infra/config/enviroment/enviroment-variables';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ValidateTokenPayloadUseCase } from 'src/application/useCases/auth/ValidateTokenPayload';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { JwtPayloadData } from 'src/infra/adapters/jwt-adapter/jwt-adapter.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    enviroment: EnviromentVariables,
    @Inject(UseCasesProxyModule.proxy.VALIDATE_TOKEN_PAYLOAD_USECASE)
    private readonly validateTokenPayloaduseCaseProxy: UseCaseProxy<ValidateTokenPayloadUseCase>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: enviroment.jwtSecret,
    });
  }

  async validate(payload: JwtPayloadData) {
    const validatePaylodResult = await this.validateTokenPayloaduseCaseProxy
      .getInstance()
      .execute({ userId: payload.sub });

    if (!validatePaylodResult) {
      throw new UnauthorizedException('User does not exist');
    }

    return validatePaylodResult;
  }
}
