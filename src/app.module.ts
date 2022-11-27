import { Module } from '@nestjs/common';

import { ControllersModule } from './infra/controllers/controllers.module';
import { JwtAdapterModule } from './infra/adapters/jwt-adapter/jwt-adapter.module';
import { UseCasesProxyModule } from './infra/use-cases-proxy/use-cases-proxy.module';
import { JwtStrategy } from './infra/common/strategies/jwtStrategy';
import { EnviromentModule } from './infra/config/enviroment/enviroment.module';

@Module({
  imports: [
    EnviromentModule,
    JwtAdapterModule,
    UseCasesProxyModule.register(),
    ControllersModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
