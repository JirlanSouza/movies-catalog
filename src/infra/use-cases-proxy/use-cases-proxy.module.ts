import { Module, DynamicModule } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/useCases/CreateUser';
import { BcryptHasherModule } from '../adapters/bcrypt-hasher/bcrypt-hasher.module';
import { BcryptHasherService } from '../adapters/bcrypt-hasher/bcrypt-hasher.service';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { TypeormUserRepository } from '../repositories/typeorm-user-repository/typeorm-user-repository';
import { UseCaseProxy } from './useCasesProxy';

@Module({
  imports: [LoggerModule, RepositoriesModule, BcryptHasherModule],
})
export class UseCasesProxyModule {
  static CREATE_USER_USECASE_PROXY = 'CreateUserUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [LoggerService, TypeormUserRepository, BcryptHasherService],
          provide: UseCasesProxyModule.CREATE_USER_USECASE_PROXY,
          useFactory: (
            logger: LoggerService,
            userRepository: TypeormUserRepository,
            hasher: BcryptHasherService,
          ) =>
            new UseCaseProxy(
              new CreateUserUseCase(userRepository, hasher, logger),
            ),
        },
      ],
      exports: [UseCasesProxyModule.CREATE_USER_USECASE_PROXY],
    };
  }
}
