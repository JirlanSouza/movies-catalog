import { Module } from '@nestjs/common';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';
import { UserController } from './user/user.controller';
import { MoviesController } from './movie/movies.controller';
import { AuthController } from './auth/auth.controller';
import { ApplicationCacheModule } from '../config/cache/cache.module';

@Module({
  imports: [UseCasesProxyModule.register(), ApplicationCacheModule],
  controllers: [UserController, MoviesController, AuthController],
})
export class ControllersModule {}
