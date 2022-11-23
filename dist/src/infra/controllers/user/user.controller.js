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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const use_cases_proxy_module_1 = require("../../use-cases-proxy/use-cases-proxy.module");
const useCasesProxy_1 = require("../../use-cases-proxy/useCasesProxy");
let UserController = class UserController {
    constructor(createUserUseCaseProxy) {
        this.createUserUseCaseProxy = createUserUseCaseProxy;
    }
    async createUser(createUserDto) {
        const createUserResult = await this.createUserUseCaseProxy
            .getInstance()
            .execute(createUserDto);
        return { userId: createUserResult.value };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(0, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.CREATE_USER_USECASE_PROXY)),
    __metadata("design:paramtypes", [useCasesProxy_1.UseCaseProxy])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map