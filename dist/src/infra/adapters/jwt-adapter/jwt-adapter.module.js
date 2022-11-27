"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapterModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const enviroment_variables_1 = require("../../config/enviroment/enviroment-variables");
const enviroment_module_1 = require("../../config/enviroment/enviroment.module");
const jwt_adapter_service_1 = require("./jwt-adapter.service");
let JwtAdapterModule = class JwtAdapterModule {
};
JwtAdapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [enviroment_module_1.EnviromentModule],
                inject: [enviroment_variables_1.EnviromentVariables],
                useFactory: (enviroment) => ({
                    expires: enviroment.jwtExpiresTime,
                    secret: enviroment.jwtSecret,
                }),
            }),
        ],
        providers: [jwt_adapter_service_1.JwtAdapterService],
        exports: [jwt_adapter_service_1.JwtAdapterService],
    })
], JwtAdapterModule);
exports.JwtAdapterModule = JwtAdapterModule;
//# sourceMappingURL=jwt-adapter.module.js.map