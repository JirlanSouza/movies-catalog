export interface HasherAdapter {
    hash(data: string): string;
    compare(data: string, hash: string): boolean;
}
