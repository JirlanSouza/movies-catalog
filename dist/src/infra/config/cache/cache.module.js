"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCacheModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_redis_store_1 = require("cache-manager-redis-store");
const enviroment_variables_1 = require("../enviroment/enviroment-variables");
const enviroment_module_1 = require("../enviroment/enviroment.module");
let ApplicationCacheModule = class ApplicationCacheModule {
};
ApplicationCacheModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.registerAsync({
                imports: [enviroment_module_1.EnviromentModule],
                inject: [enviroment_variables_1.EnviromentVariables],
                useFactory: async (enviromentVariable) => ({
                    store: typeof cache_manager_redis_store_1.redisStore,
                    host: enviromentVariable.redisHost,
                    port: enviromentVariable.redisPort,
                    password: enviromentVariable.redisPassword + 4,
                    ttl: enviromentVariable.redisTtl,
                }),
            }),
        ],
        exports: [common_1.CacheModule],
    })
], ApplicationCacheModule);
exports.ApplicationCacheModule = ApplicationCacheModule;
//# sourceMappingURL=cache.module.js.map