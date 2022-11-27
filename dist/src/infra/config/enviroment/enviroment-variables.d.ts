import { ConfigService } from '@nestjs/config';
export declare class EnviromentVariables {
    private readonly configService;
    constructor(configService: ConfigService);
    get port(): number;
    get databaseHost(): string;
    get databasePort(): number;
    get databaseUser(): string;
    get databasePassword(): string;
    get databaseName(): string;
    get databaseSchema(): string;
    get redisHost(): string;
    get redisPort(): number;
    get redisPassword(): string;
    get redisTtl(): number;
    get jwtExpiresTime(): number;
    get jwtSecret(): string;
}
