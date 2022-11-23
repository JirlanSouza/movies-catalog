import { Id } from 'src/domain/core/Id';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { UserModel } from 'src/infra/models/user-model';
import { Repository } from 'typeorm';
export declare class TypeormUserRepository implements UserRepository {
    private readonly userModelRepository;
    constructor(userModelRepository: Repository<UserModel>);
    getByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<User>;
    update(id: Id, user: User): Promise<User>;
    getById(id: Id): Promise<User>;
    getAll(): Promise<User[]>;
    delete(id: Id): Promise<void>;
    private userEntityToUserModel;
    private userModelToUserEntity;
}
