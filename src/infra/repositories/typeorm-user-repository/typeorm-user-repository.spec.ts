import { TypeormUserRepository } from './typeorm-user-repository';

describe('TypeormUserRepository', () => {
  it('should be defined', () => {
    expect(new TypeormUserRepository()).toBeDefined();
  });
});
