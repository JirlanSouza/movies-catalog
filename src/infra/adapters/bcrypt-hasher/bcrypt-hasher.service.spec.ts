import { Test, TestingModule } from '@nestjs/testing';
import { BcryptHasherService } from './bcrypt-hasher.service';

describe('BcryptHasherService', () => {
  let service: BcryptHasherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptHasherService],
    }).compile();

    service = module.get<BcryptHasherService>(BcryptHasherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
