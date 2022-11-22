import { Id } from 'src/domain/core/Id';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';

export class TypeormUserRepository implements UserRepository {
  getByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  save(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: Id, entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getById(id: Id): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: Id): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
