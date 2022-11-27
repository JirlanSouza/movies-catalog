import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnviromentVariables } from '../enviroment/enviroment-variables';

export const getTypeormOptions = (
  enviromentVariables: EnviromentVariables,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: enviromentVariables.databaseHost,
  port: enviromentVariables.databasePort,
  username: enviromentVariables.databaseUser,
  password: enviromentVariables.databasePassword,
  database: enviromentVariables.databaseName,
  synchronize: false,
  schema: enviromentVariables.databaseSchema,
  migrationsRun: true,
  entities: ['dist/src/infra/models/*{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
});
