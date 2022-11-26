import { Cache } from 'cache-manager';
export declare class CacheController {
    private readonly cacheManager;
    constructor(cacheManager: Cache);
    getCache(): Promise<{
        fromCache: boolean;
        value: number;
    }>;
    deleteCache(): Promise<void>;
}
