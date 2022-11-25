import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from '../config/typeorm/typeorm.module';
import { MovieModel } from '../models/movie-model';
import { UserModel } from '../models/user-model';
import { TypeormMoviesReoisitory } from './typeorm-movies-reoisitory/typeorm-movies-reoisitory';
import { TypeormUserRepository } from './typeorm-user-repository/typeorm-user-repository';

@Module({
  imports: [TypeormModule, TypeOrmModule.forFeature([UserModel, MovieModel])],
  providers: [TypeormUserRepository, TypeormMoviesReoisitory],
  exports: [TypeormUserRepository, TypeormMoviesReoisitory],
})
export class RepositoriesModule {}
