import { ConfigService } from '@nestjs/config';
export declare class EnviromentVariables {
    private readonly configService;
    constructor(configService: ConfigService);
    get databaseHost(): string;
    get databasePort(): number;
    get databaseUser(): string;
    get databasePassword(): string;
    get databaseName(): string;
    get databaseSchema(): string;
}
