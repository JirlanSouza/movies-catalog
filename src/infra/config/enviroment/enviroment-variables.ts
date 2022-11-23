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
}
