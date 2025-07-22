/// <reference types="node" />
/// <reference types="node" />
export declare class HashService {
    hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;
    compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
