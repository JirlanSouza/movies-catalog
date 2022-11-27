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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const use_cases_proxy_module_1 = require("../../use-cases-proxy/use-cases-proxy.module");
const useCasesProxy_1 = require("../../use-cases-proxy/useCasesProxy");
const exceptionPresenter_1 = require("../exceptionPresenter");
const SignInDto_1 = require("./dtos/SignInDto");
const SignInPresenter_1 = require("./presenters/SignInPresenter");
let AuthController = class AuthController {
    constructor(signInUseCaseProxy) {
        this.signInUseCaseProxy = signInUseCaseProxy;
    }
    async signIn(creadentials) {
        const signInResult = await this.signInUseCaseProxy
            .getInstance()
            .execute(creadentials);
        return new SignInPresenter_1.SignInPresenter(signInResult);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, type: SignInPresenter_1.SignInPresenter }),
    (0, swagger_1.ApiResponse)({ status: 400, type: exceptionPresenter_1.BadRequestPresenter }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignInDto_1.SignInControllerDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiResponse)({ status: 500, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, common_1.Controller)('auth'),
    __param(0, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.SIGNIN_USECASE)),
    __metadata("design:paramtypes", [useCasesProxy_1.UseCaseProxy])
], AuthController);
exports.AuthController = AuthController;
