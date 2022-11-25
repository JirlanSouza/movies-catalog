import { Module, DynamicModule } from '@nestjs/common';
import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { DeleteMovieUseCase } from 'src/application/useCases/movie/DeleteMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UpdateMovieUseCase } from 'src/application/useCases/movie/UpdateMovie';
import { CreateUserUseCase } from 'src/application/useCases/user/CreateUser';
import { BcryptHasherModule } from '../adapters/bcrypt-hasher/bcrypt-hasher.module';
import { BcryptHasherService } from '../adapters/bcrypt-hasher/bcrypt-hasher.service';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { TypeormMoviesReoisitory } from '../repositories/typeorm-movies-reoisitory/typeorm-movies-reoisitory';
import { TypeormUserRepository } from '../repositories/typeorm-user-repository/typeorm-user-repository';
import { UseCaseProxy } from './useCasesProxy';

@Module({
  imports: [LoggerModule, RepositoriesModule, BcryptHasherModule],
})
export class UseCasesProxyModule {
  static proxy = {
    CREATE_USER_USECASE: 'CreateUserUseCaseProxy',
    CREATE_MOVIE_USECASE: 'CreateMovieUseCaseProxy',
    GET_MANY_MOVIES_USECASE: 'GetManyMoviesUseCaseProxy',
    GET_MOVIE_USECASE: 'GetMovieUseCaseProxy',
    UPDATE_MOVIE_USECASE: 'UpdateMovieUseCaseProxy',
    DELETE_MOVIE_USECASE: 'DeleteMovieUseCaseProxy',
  };

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [LoggerService, TypeormUserRepository, BcryptHasherService],
          provide: UseCasesProxyModule.proxy.CREATE_USER_USECASE,
          useFactory: (
            logger: LoggerService,
            userRepository: TypeormUserRepository,
            hasher: BcryptHasherService,
          ) =>
            new UseCaseProxy(
              new CreateUserUseCase(userRepository, hasher, logger),
            ),
        },
        {
          inject: [LoggerService, TypeormMoviesReoisitory],
          provide: UseCasesProxyModule.proxy.CREATE_MOVIE_USECASE,
          useFactory: (
            logger: LoggerService,
            moviesRepository: TypeormMoviesReoisitory,
          ) =>
            new UseCaseProxy(new CreateMovieUseCase(moviesRepository, logger)),
        },
        {
          inject: [TypeormMoviesReoisitory],
          provide: UseCasesProxyModule.proxy.GET_MANY_MOVIES_USECASE,
          useFactory: (moviesRepository: TypeormMoviesReoisitory) =>
            new UseCaseProxy(new GetManyMoviesUseCase(moviesRepository)),
        },
        {
          inject: [TypeormMoviesReoisitory],
          provide: UseCasesProxyModule.proxy.GET_MOVIE_USECASE,
          useFactory: (moviesRepository: TypeormMoviesReoisitory) =>
            new UseCaseProxy(new GetMovieUseCase(moviesRepository)),
        },
        {
          inject: [LoggerService, TypeormMoviesReoisitory],
          provide: UseCasesProxyModule.proxy.UPDATE_MOVIE_USECASE,
          useFactory: (
            logger: LoggerService,
            moviesRepository: TypeormMoviesReoisitory,
          ) =>
            new UseCaseProxy(new UpdateMovieUseCase(moviesRepository, logger)),
        },
        {
          inject: [LoggerService, TypeormMoviesReoisitory],
          provide: UseCasesProxyModule.proxy.DELETE_MOVIE_USECASE,
          useFactory: (
            logger: LoggerService,
            moviesRepository: TypeormMoviesReoisitory,
          ) =>
            new UseCaseProxy(new DeleteMovieUseCase(moviesRepository, logger)),
        },
      ],
      exports: Object.values(UseCasesProxyModule.proxy),
    };
  }
}
