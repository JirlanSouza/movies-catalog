"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const enviroment_variables_1 = require("../../config/enviroment/enviroment-variables");
const useCasesProxy_1 = require("../../use-cases-proxy/useCasesProxy");
const use_cases_proxy_module_1 = require("../../use-cases-proxy/use-cases-proxy.module");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(enviroment, validateTokenPayloaduseCaseProxy) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: enviroment.jwtSecret,
        });
        this.validateTokenPayloaduseCaseProxy = validateTokenPayloaduseCaseProxy;
    }
    async validate(payload) {
        const validatePaylodResult = await this.validateTokenPayloaduseCaseProxy
            .getInstance()
            .execute({ userId: payload.sub });
        if (!validatePaylodResult) {
            throw new common_1.UnauthorizedException('User does not exist');
        }
        return validatePaylodResult;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.VALIDATE_TOKEN_PAYLOAD_USECASE)),
    __metadata("design:paramtypes", [enviroment_variables_1.EnviromentVariables,
        useCasesProxy_1.UseCaseProxy])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
