import { Module } from '@nestjs/common';

import { UseCasesProxyModule } from './infra/use-cases-proxy/use-cases-proxy.module';
import { BcryptHasherModule } from './infra/adapters/bcrypt-hasher/bcrypt-hasher.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { ControllersModule } from './infra/controllers/controllers.module';

@Module({
  imports: [
    UseCasesProxyModule.register(),
    BcryptHasherModule,
    RepositoriesModule,
    ControllersModule,
  ],
  providers: [],
})
export class AppModule {}
