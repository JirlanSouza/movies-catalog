import { Module } from '@nestjs/common';

import { ControllersModule } from './infra/controllers/controllers.module';

@Module({
  imports: [ControllersModule],
})
export class AppModule {}
