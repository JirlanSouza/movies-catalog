import { Module, DynamicModule } from '@nestjs/common';
import { ValidateTokenPayloadUseCase } from 'src/application/useCases/auth/ValidateTokenPayload';
import { SignInUseCase } from 'src/application/useCases/auth/SignIn';
import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { DeleteMovieUseCase } from 'src/application/useCases/movie/DeleteMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UpdateMovieUseCase } from 'src/application/useCases/movie/UpdateMovie';
import { CreateUserUseCase } from 'src/application/useCases/user/CreateUser';
import { BcryptHasherModule } from '../adapters/bcrypt-hasher/bcrypt-hasher.module';
import { BcryptHasherService } from '../adapters/bcrypt-hasher/bcrypt-hasher.service';
import { JwtAdapterModule } from '../adapters/jwt-adapter/jwt-adapter.module';
import { JwtAdapterService } from '../adapters/jwt-adapter/jwt-adapter.service';
import { EnviromentVariables } from '../config/enviroment/enviroment-variables';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { TypeormMoviesReoisitory } from '../repositories/typeorm-movies-reoisitory/typeorm-movies-reoisitory';
import { TypeormUserRepository } from '../repositories/typeorm-user-repository/typeorm-user-repository';
import { UseCaseProxy } from './useCasesProxy';

@Module({
  imports: [
    LoggerModule,
    RepositoriesModule,
    BcryptHasherModule,
    JwtAdapterModule,
  ],
})
export class UseCasesProxyModule {
  static proxy = {
    CREATE_USER_USECASE: 'CreateUserUseCaseProxy',
    CREATE_MOVIE_USECASE: 'CreateMovieUseCaseProxy',
    GET_MANY_MOVIES_USECASE: 'GetManyMoviesUseCaseProxy',
    GET_MOVIE_USECASE: 'GetMovieUseCaseProxy',
    UPDATE_MOVIE_USECASE: 'UpdateMovieUseCaseProxy',
    DELETE_MOVIE_USECASE: 'DeleteMovieUseCaseProxy',
    SIGNIN_USECASE: 'SignInUseCaseProxy',
    VALIDATE_TOKEN_PAYLOAD_USECASE: 'ValidateTokenPayloaduseCaseProxy',
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
        {
          inject: [
            TypeormUserRepository,
            BcryptHasherService,
            JwtAdapterService,
            LoggerService,
          ],
          provide: UseCasesProxyModule.proxy.SIGNIN_USECASE,
          useFactory: (
            userRepository: TypeormUserRepository,
            hasher: BcryptHasherService,
            jwt: JwtAdapterService,
            logger: LoggerService,
          ) =>
            new UseCaseProxy(
              new SignInUseCase(userRepository, hasher, jwt, logger),
            ),
        },
        {
          inject: [TypeormUserRepository],
          provide: UseCasesProxyModule.proxy.VALIDATE_TOKEN_PAYLOAD_USECASE,
          useFactory: (userRepository: TypeormUserRepository) =>
            new UseCaseProxy(new ValidateTokenPayloadUseCase(userRepository)),
        },
      ],
      exports: Object.values(UseCasesProxyModule.proxy),
    };
  }
}
