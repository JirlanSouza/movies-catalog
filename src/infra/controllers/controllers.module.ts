import { Module } from '@nestjs/common';
import { UseCasesProxyModule } from '../use-cases-proxy/use-cases-proxy.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UseCasesProxyModule.register()],
  controllers: [UserController],
})
export class ControllersModule {}
