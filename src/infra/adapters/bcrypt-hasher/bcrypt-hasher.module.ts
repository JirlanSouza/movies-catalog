import { Module } from '@nestjs/common';
import { BcryptHasherService } from './bcrypt-hasher.service';

@Module({
  providers: [BcryptHasherService],
  exports: [BcryptHasherService],
})
export class BcryptHasherModule {}
