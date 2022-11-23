import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModel } from 'src/infra/models/user-model';
import { EnviromentVariables } from '../enviroment/enviroment-variables';

console.log('database/migrations/*{.ts,.js}');

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
  entities: ['/src/infra/models/*{.ts,.js}'],
  migrations: ['/database/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
});