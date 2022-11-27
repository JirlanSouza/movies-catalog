"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_module_1 = require("./infra/controllers/controllers.module");
const jwt_adapter_module_1 = require("./infra/adapters/jwt-adapter/jwt-adapter.module");
const use_cases_proxy_module_1 = require("./infra/use-cases-proxy/use-cases-proxy.module");
const jwtStrategy_1 = require("./infra/common/strategies/jwtStrategy");
const enviroment_module_1 = require("./infra/config/enviroment/enviroment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            enviroment_module_1.EnviromentModule,
            jwt_adapter_module_1.JwtAdapterModule,
            use_cases_proxy_module_1.UseCasesProxyModule.register(),
            controllers_module_1.ControllersModule,
        ],
        providers: [jwtStrategy_1.JwtStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map