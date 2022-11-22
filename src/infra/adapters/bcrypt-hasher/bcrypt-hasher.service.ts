import { Injectable } from '@nestjs/common';
import { hashSync, compareSync } from 'bcrypt';
import { HasherAdapter } from 'src/application/adapters/hasherAdapter';

@Injectable()
export class BcryptHasherService implements HasherAdapter {
  private static rounds: 8;

  hash(data: string): string {
    return hashSync(data, BcryptHasherService.rounds);
  }
  compare(data: string, hash: string): boolean {
    return compareSync(data, hash);
  }
}
