import { User } from 'src/domain/entities/User';

export interface UserWithOutPassword extends Omit<User, 'password'> {}
