import { DynamicModule } from '@nestjs/common';
export declare class UseCasesProxyModule {
    static proxy: {
        CREATE_USER_USECASE: string;
        CREATE_MOVIE_USECASE: string;
        GET_MANY_MOVIES_USECASE: string;
        GET_MOVIE_USECASE: string;
        UPDATE_MOVIE_USECASE: string;
        DELETE_MOVIE_USECASE: string;
        SIGNIN_USECASE: string;
        VALIDATE_TOKEN_PAYLOAD_USECASE: string;
    };
    static register(): DynamicModule;
}
