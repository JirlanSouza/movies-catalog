import { Module } from '@nestjs/common';
import { TypeormUserRepository } from './typeorm-user-repository/typeorm-user-repository';

@Module({
  providers: [TypeormUserRepository],
  exports: [TypeormUserRepository],
})
export class RepositoriesModule {}
