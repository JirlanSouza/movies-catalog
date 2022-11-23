import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnviromentVariables } from '../enviroment/enviroment-variables';
export declare const getTypeormOptions: (enviromentVariables: EnviromentVariables) => TypeOrmModuleOptions;
