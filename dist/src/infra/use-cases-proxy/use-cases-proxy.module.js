"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UseCasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const ValidateTokenPayload_1 = require("../../application/useCases/auth/ValidateTokenPayload");
const SignIn_1 = require("../../application/useCases/auth/SignIn");
const CreateMovie_1 = require("../../application/useCases/movie/CreateMovie");
const DeleteMovie_1 = require("../../application/useCases/movie/DeleteMovie");
const getManyMovies_1 = require("../../application/useCases/movie/getManyMovies");
const getMovie_1 = require("../../application/useCases/movie/getMovie");
const UpdateMovie_1 = require("../../application/useCases/movie/UpdateMovie");
const CreateUser_1 = require("../../application/useCases/user/CreateUser");
const bcrypt_hasher_module_1 = require("../adapters/bcrypt-hasher/bcrypt-hasher.module");
const bcrypt_hasher_service_1 = require("../adapters/bcrypt-hasher/bcrypt-hasher.service");
const jwt_adapter_module_1 = require("../adapters/jwt-adapter/jwt-adapter.module");
const jwt_adapter_service_1 = require("../adapters/jwt-adapter/jwt-adapter.service");
const logger_module_1 = require("../logger/logger.module");
const logger_service_1 = require("../logger/logger.service");
const repositories_module_1 = require("../repositories/repositories.module");
const typeorm_movies_reoisitory_1 = require("../repositories/typeorm-movies-reoisitory/typeorm-movies-reoisitory");
const typeorm_user_repository_1 = require("../repositories/typeorm-user-repository/typeorm-user-repository");
const useCasesProxy_1 = require("./useCasesProxy");
let UseCasesProxyModule = UseCasesProxyModule_1 = class UseCasesProxyModule {
    static register() {
        return {
            module: UseCasesProxyModule_1,
            providers: [
                {
                    inject: [logger_service_1.LoggerService, typeorm_user_repository_1.TypeormUserRepository, bcrypt_hasher_service_1.BcryptHasherService],
                    provide: UseCasesProxyModule_1.proxy.CREATE_USER_USECASE,
                    useFactory: (logger, userRepository, hasher) => new useCasesProxy_1.UseCaseProxy(new CreateUser_1.CreateUserUseCase(userRepository, hasher, logger)),
                },
                {
                    inject: [logger_service_1.LoggerService, typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
                    provide: UseCasesProxyModule_1.proxy.CREATE_MOVIE_USECASE,
                    useFactory: (logger, moviesRepository) => new useCasesProxy_1.UseCaseProxy(new CreateMovie_1.CreateMovieUseCase(moviesRepository, logger)),
                },
                {
                    inject: [typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
                    provide: UseCasesProxyModule_1.proxy.GET_MANY_MOVIES_USECASE,
                    useFactory: (moviesRepository) => new useCasesProxy_1.UseCaseProxy(new getManyMovies_1.GetManyMoviesUseCase(moviesRepository)),
                },
                {
                    inject: [typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
                    provide: UseCasesProxyModule_1.proxy.GET_MOVIE_USECASE,
                    useFactory: (moviesRepository) => new useCasesProxy_1.UseCaseProxy(new getMovie_1.GetMovieUseCase(moviesRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
                    provide: UseCasesProxyModule_1.proxy.UPDATE_MOVIE_USECASE,
                    useFactory: (logger, moviesRepository) => new useCasesProxy_1.UseCaseProxy(new UpdateMovie_1.UpdateMovieUseCase(moviesRepository, logger)),
                },
                {
                    inject: [logger_service_1.LoggerService, typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
                    provide: UseCasesProxyModule_1.proxy.DELETE_MOVIE_USECASE,
                    useFactory: (logger, moviesRepository) => new useCasesProxy_1.UseCaseProxy(new DeleteMovie_1.DeleteMovieUseCase(moviesRepository, logger)),
                },
                {
                    inject: [
                        typeorm_user_repository_1.TypeormUserRepository,
                        bcrypt_hasher_service_1.BcryptHasherService,
                        jwt_adapter_service_1.JwtAdapterService,
                        logger_service_1.LoggerService,
                    ],
                    provide: UseCasesProxyModule_1.proxy.SIGNIN_USECASE,
                    useFactory: (userRepository, hasher, jwt, logger) => new useCasesProxy_1.UseCaseProxy(new SignIn_1.SignInUseCase(userRepository, hasher, jwt, logger)),
                },
                {
                    inject: [typeorm_user_repository_1.TypeormUserRepository],
                    provide: UseCasesProxyModule_1.proxy.VALIDATE_TOKEN_PAYLOAD_USECASE,
                    useFactory: (userRepository) => new useCasesProxy_1.UseCaseProxy(new ValidateTokenPayload_1.ValidateTokenPayloadUseCase(userRepository)),
                },
            ],
            exports: Object.values(UseCasesProxyModule_1.proxy),
        };
    }
};
UseCasesProxyModule.proxy = {
    CREATE_USER_USECASE: 'CreateUserUseCaseProxy',
    CREATE_MOVIE_USECASE: 'CreateMovieUseCaseProxy',
    GET_MANY_MOVIES_USECASE: 'GetManyMoviesUseCaseProxy',
    GET_MOVIE_USECASE: 'GetMovieUseCaseProxy',
    UPDATE_MOVIE_USECASE: 'UpdateMovieUseCaseProxy',
    DELETE_MOVIE_USECASE: 'DeleteMovieUseCaseProxy',
    SIGNIN_USECASE: 'SignInUseCaseProxy',
    VALIDATE_TOKEN_PAYLOAD_USECASE: 'ValidateTokenPayloaduseCaseProxy',
};
UseCasesProxyModule = UseCasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            logger_module_1.LoggerModule,
            repositories_module_1.RepositoriesModule,
            bcrypt_hasher_module_1.BcryptHasherModule,
            jwt_adapter_module_1.JwtAdapterModule,
        ],
    })
], UseCasesProxyModule);
exports.UseCasesProxyModule = UseCasesProxyModule;
