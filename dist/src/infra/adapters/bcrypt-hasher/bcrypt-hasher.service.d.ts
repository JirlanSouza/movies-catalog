import { HasherAdapter } from 'src/application/adapters/hasherAdapter';
export declare class BcryptHasherService implements HasherAdapter {
    private static rounds;
    hash(data: string): string;
    compare(data: string, hash: string): boolean;
}
