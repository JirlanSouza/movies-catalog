import { Strategy } from 'passport-jwt';
import { EnviromentVariables } from 'src/infra/config/enviroment/enviroment-variables';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ValidateTokenPayloadUseCase } from 'src/application/useCases/auth/ValidateTokenPayload';
import { JwtPayloadData } from 'src/infra/adapters/jwt-adapter/jwt-adapter.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly validateTokenPayloaduseCaseProxy;
    constructor(enviroment: EnviromentVariables, validateTokenPayloaduseCaseProxy: UseCaseProxy<ValidateTokenPayloadUseCase>);
    validate(payload: JwtPayloadData): Promise<import("../../../application/useCases/auth/AuthDtos").ValidateTokenPayloadResultDto>;
}
export {};
