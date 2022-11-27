import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envFilePath, ignoreEnvFile } from './env-file';
import { EnviromentVariables } from './enviroment-variables';
console.log(process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath,
      ignoreEnvFile,
    }),
  ],
  providers: [EnviromentVariables],
  exports: [EnviromentVariables],
})
export class EnviromentModule {}
