import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnviromentVariables {
  constructor(private readonly configService: ConfigService) {}

  get databaseHost() {
    return this.configService.get<string>('DATABASE_HOST');
  }

  get databasePort() {
    return this.configService.get<number>('DATABASE_PORT');
  }

  get databaseUser() {
    return this.configService.get<string>('DATABASE_USER');
  }

  get databasePassword() {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  get databaseName() {
    return this.configService.get<string>('DATABASE');
  }

  get databaseSchema() {
    return this.configService.get<string>('DATABASE_SCHEMA');
  }

  get redisHost() {
    return this.configService.get<string>('REDIS_HOST');
  }

  get redisPort() {
    return this.configService.get<number>('REDIS_PORT');
  }

  get redisPassword() {
    return this.configService.get<string>('REDIS_PASSWORD');
  }

  get redisTtl() {
    return parseInt(this.configService.get<string>('REDIS_TTL'));
  }

  get jwtExpiresTime() {
    return parseInt(this.configService.get<string>('JWT_EXPIRES_TIME'));
  }

  get jwtSecret() {
    return this.configService.get<string>('JWT_SECRET');
  }
}
