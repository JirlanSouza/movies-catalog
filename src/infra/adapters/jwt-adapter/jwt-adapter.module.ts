import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EnviromentVariables } from 'src/infra/config/enviroment/enviroment-variables';
import { EnviromentModule } from 'src/infra/config/enviroment/enviroment.module';
import { JwtAdapterService } from './jwt-adapter.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [EnviromentModule],
      inject: [EnviromentVariables],
      useFactory: (enviroment: EnviromentVariables) => ({
        expires: enviroment.jwtExpiresTime,
        secret: enviroment.jwtSecret,
      }),
    }),
  ],
  providers: [JwtAdapterService],
  exports: [JwtAdapterService],
})
export class JwtAdapterModule {}
