"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviromentModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const enviroment_variables_1 = require("./enviroment-variables");
let EnviromentModule = class EnviromentModule {
};
EnviromentModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true })],
        providers: [enviroment_variables_1.EnviromentVariables],
        exports: [enviroment_variables_1.EnviromentVariables],
    })
], EnviromentModule);
exports.EnviromentModule = EnviromentModule;
//# sourceMappingURL=enviroment.module.js.map