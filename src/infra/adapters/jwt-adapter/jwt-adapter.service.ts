import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAdapter, JwtPayload } from 'src/application/adapters/jwtAdapter';

export type JwtPayloadData = {
  sub: string;
};

@Injectable()
export class JwtAdapterService implements JwtAdapter {
  constructor(private readonly jwtService: JwtService) {}

  signIn(payload: JwtPayload): string {
    const jwtPayload = { sub: payload.userId };
    const token = this.jwtService.sign(jwtPayload);
    return token;
  }

  verify(token: string): JwtPayload {
    try {
      const jwtPayload = this.jwtService.verify<JwtPayloadData>(token);
      return { userId: jwtPayload.sub };
    } catch (err) {}
  }
}
