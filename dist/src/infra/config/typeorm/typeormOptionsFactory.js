"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeormOptions = void 0;
const getTypeormOptions = (enviromentVariables) => ({
    type: 'postgres',
    host: enviromentVariables.databaseHost,
    port: enviromentVariables.databasePort,
    username: enviromentVariables.databaseUser,
    password: enviromentVariables.databasePassword,
    database: enviromentVariables.databaseName,
    synchronize: false,
    schema: enviromentVariables.databaseSchema,
    migrationsRun: true,
    entities: ['/src/infra/models/*{.ts,.js}'],
    migrations: ['/database/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
});
exports.getTypeormOptions = getTypeormOptions;
