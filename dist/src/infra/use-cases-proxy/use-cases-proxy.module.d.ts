import { DynamicModule } from '@nestjs/common';
export declare class UseCasesProxyModule {
    static proxy: {
        CREATE_USER_USECASE: string;
        CREATE_MOVIE_USECASE: string;
    };
    static register(): DynamicModule;
}
