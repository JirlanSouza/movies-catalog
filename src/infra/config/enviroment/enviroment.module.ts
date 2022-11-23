import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnviromentVariables } from './enviroment-variables';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [EnviromentVariables],
  exports: [EnviromentVariables],
})
export class EnviromentModule {}
