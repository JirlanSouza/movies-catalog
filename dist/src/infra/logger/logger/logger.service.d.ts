import { Logger } from '@nestjs/common';
import { ApplicationLogger } from 'src/application/logger/logger';
export declare class LoggerService extends Logger implements ApplicationLogger {
    debug(context: string, message: string): void;
    log(context: string, message: string): void;
    error(context: string, message: string, trace?: string): void;
    warn(context: string, message: string): void;
    verbose(context: string, message: string): void;
}
