import { Module } from '@nestjs/common';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';
import { UserController } from './user/user.controller';
import { MoviesController } from './movie/movies.controller';

@Module({
  imports: [UseCasesProxyModule.register()],
  controllers: [UserController, MoviesController],
})
export class ControllersModule {}
