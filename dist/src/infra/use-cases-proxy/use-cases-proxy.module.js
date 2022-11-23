"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UseCasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const CreateUser_1 = require("../../application/useCases/CreateUser");
const bcrypt_hasher_module_1 = require("../adapters/bcrypt-hasher/bcrypt-hasher.module");
const bcrypt_hasher_service_1 = require("../adapters/bcrypt-hasher/bcrypt-hasher.service");
const repositories_module_1 = require("../repositories/repositories.module");
const typeorm_user_repository_1 = require("../repositories/typeorm-user-repository/typeorm-user-repository");
const useCasesProxy_1 = require("./useCasesProxy");
let UseCasesProxyModule = UseCasesProxyModule_1 = class UseCasesProxyModule {
    static register() {
        return {
            module: UseCasesProxyModule_1,
            providers: [
                {
                    inject: [typeorm_user_repository_1.TypeormUserRepository, bcrypt_hasher_service_1.BcryptHasherService],
                    provide: UseCasesProxyModule_1.CREATE_USER_USECASE_PROXY,
                    useFactory: (userRepository, hasher) => new useCasesProxy_1.UseCaseProxy(new CreateUser_1.CreateUserUseCase(userRepository, hasher)),
                },
            ],
            exports: [UseCasesProxyModule_1.CREATE_USER_USECASE_PROXY],
        };
    }
};
UseCasesProxyModule.CREATE_USER_USECASE_PROXY = 'CreateUserUseCaseProxy';
UseCasesProxyModule = UseCasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule, bcrypt_hasher_module_1.BcryptHasherModule],
    })
], UseCasesProxyModule);
exports.UseCasesProxyModule = UseCasesProxyModule;
//# sourceMappingURL=use-cases-proxy.module.js.map