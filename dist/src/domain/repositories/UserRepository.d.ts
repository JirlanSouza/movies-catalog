import { Repository } from '../core/Repository';
import { User } from '../entities/User';
export interface UserRepository extends Repository<User> {
    getByEmail(email: string): Promise<User | undefined>;
}
