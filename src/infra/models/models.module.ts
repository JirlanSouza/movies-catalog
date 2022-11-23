import { Module } from '@nestjs/common';
import { UserModel } from './user-model';

@Module({
  providers: [UserModel],
  exports: [UserModel],
})
export class ModelsModule {}
