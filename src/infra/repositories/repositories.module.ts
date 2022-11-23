import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from '../config/typeorm/typeorm.module';
import { UserModel } from '../models/user-model';
import { TypeormUserRepository } from './typeorm-user-repository/typeorm-user-repository';

@Module({
  imports: [TypeormModule, TypeOrmModule.forFeature([UserModel])],
  providers: [TypeormUserRepository],
  exports: [TypeormUserRepository],
})
export class RepositoriesModule {}
