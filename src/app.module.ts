import { Module } from '@nestjs/common';

import { UseCasesProxyModule } from './infra/use-cases-proxy/use-cases-proxy.module';
import { BcryptHasherModule } from './infra/adapters/bcrypt-hasher/bcrypt-hasher.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { ControllersModule } from './infra/controllers/controllers.module';
import { TypeormModule } from './infra/config/typeorm/typeorm.module';
import { ModelsModule } from './infra/models/models.module';
import { EnviromentModule } from './infra/config/enviroment/enviroment.module';
import { EnviromentVariables } from './infra/config/enviroment/enviroment-variables';

@Module({
  imports: [
    UseCasesProxyModule.register(),
    BcryptHasherModule,
    RepositoriesModule,
    ControllersModule,
    TypeormModule,
    ModelsModule,
    EnviromentModule,
  ],
  providers: [EnviromentVariables],
})
export class AppModule {}
