"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enviroment_variables_1 = require("../enviroment/enviroment-variables");
const enviroment_module_1 = require("../enviroment/enviroment.module");
const typeormOptionsFactory_1 = require("./typeormOptionsFactory");
let TypeormModule = class TypeormModule {
};
TypeormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [enviroment_module_1.EnviromentModule],
                inject: [enviroment_variables_1.EnviromentVariables],
                useFactory: typeormOptionsFactory_1.getTypeormOptions,
            }),
        ],
    })
], TypeormModule);
exports.TypeormModule = TypeormModule;
