import { CacheModule, Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-store';
import { ClientOpts } from 'redis';
import { EnviromentVariables } from '../enviroment/enviroment-variables';
import { EnviromentModule } from '../enviroment/enviroment.module';

@Module({
  imports: [
    CacheModule.registerAsync<ClientOpts>({
      imports: [EnviromentModule],
      inject: [EnviromentVariables],
      useFactory: async (enviromentVariable: EnviromentVariables) => ({
        store: typeof redisStore,
        host: enviromentVariable.redisHost,
        port: enviromentVariable.redisPort,
        password: enviromentVariable.redisPassword + 4,
        ttl: enviromentVariable.redisTtl,
      }),
    }),
  ],
  exports: [CacheModule],
})
export class ApplicationCacheModule {}
