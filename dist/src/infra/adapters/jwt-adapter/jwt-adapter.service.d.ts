import { JwtService } from '@nestjs/jwt';
import { JwtAdapter, JwtPayload } from 'src/application/adapters/jwtAdapter';
export declare type JwtPayloadData = {
    sub: string;
};
export declare class JwtAdapterService implements JwtAdapter {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signIn(payload: JwtPayload): string;
    verify(token: string): JwtPayload;
}
