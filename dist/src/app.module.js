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
const use_cases_proxy_module_1 = require("./infra/use-cases-proxy/use-cases-proxy.module");
const bcrypt_hasher_module_1 = require("./infra/adapters/bcrypt-hasher/bcrypt-hasher.module");
const repositories_module_1 = require("./infra/repositories/repositories.module");
const controllers_module_1 = require("./infra/controllers/controllers.module");
const typeorm_module_1 = require("./infra/config/typeorm/typeorm.module");
const models_module_1 = require("./infra/models/models.module");
const enviroment_module_1 = require("./infra/config/enviroment/enviroment.module");
const enviroment_variables_1 = require("./infra/config/enviroment/enviroment-variables");
const logger_service_1 = require("./infra/logger/logger.service");
const logger_module_1 = require("./infra/logger/logger.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            use_cases_proxy_module_1.UseCasesProxyModule.register(),
            bcrypt_hasher_module_1.BcryptHasherModule,
            repositories_module_1.RepositoriesModule,
            controllers_module_1.ControllersModule,
            typeorm_module_1.TypeormModule,
            models_module_1.ModelsModule,
            enviroment_module_1.EnviromentModule,
            logger_module_1.LoggerModule,
        ],
        providers: [enviroment_variables_1.EnviromentVariables, logger_service_1.LoggerService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map