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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviromentVariables = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let EnviromentVariables = class EnviromentVariables {
    constructor(configService) {
        this.configService = configService;
    }
    get databaseHost() {
        return this.configService.get('DATABASE_HOST');
    }
    get databasePort() {
        return this.configService.get('DATABASE_PORT');
    }
    get databaseUser() {
        return this.configService.get('DATABASE_USER');
    }
    get databasePassword() {
        return this.configService.get('DATABASE_PASSWORD');
    }
    get databaseName() {
        return this.configService.get('DATABASE');
    }
    get databaseSchema() {
        return this.configService.get('DATABASE_SCHEMA');
    }
    get redisHost() {
        return this.configService.get('REDIS_HOST');
    }
    get redisPort() {
        return this.configService.get('REDIS_PORT');
    }
    get redisPassword() {
        return this.configService.get('REDIS_PASSWORD');
    }
    get redisTtl() {
        return parseInt(this.configService.get('REDIS_TTL'));
    }
    get jwtExpiresTime() {
        return parseInt(this.configService.get('JWT_EXPIRES_TIME'));
    }
    get jwtSecret() {
        return this.configService.get('JWT_SECRET');
    }
};
EnviromentVariables = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EnviromentVariables);
exports.EnviromentVariables = EnviromentVariables;
