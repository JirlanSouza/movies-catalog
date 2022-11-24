import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ApplicationLogger } from 'src/application/logger/logger';
export declare class AllExceptionFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    private readonly logger;
    constructor(httpAdapterHost: HttpAdapterHost, logger: ApplicationLogger);
    catch(exception: any, host: ArgumentsHost): void;
    private mapExceptionDataByInstance;
    private logMessage;
}
