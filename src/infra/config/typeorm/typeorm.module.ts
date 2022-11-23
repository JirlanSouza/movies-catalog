import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviromentVariables } from '../enviroment/enviroment-variables';
import { EnviromentModule } from '../enviroment/enviroment.module';
import { getTypeormOptions } from './typeormOptionsFactory';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnviromentModule],
      inject: [EnviromentVariables],
      useFactory: getTypeormOptions,
    }),
  ],
})
export class TypeormModule {}
