import { InjectRepository } from '@nestjs/typeorm';
import { Id } from 'src/domain/core/Id';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { UserModel } from 'src/infra/models/user-model';
import { Repository } from 'typeorm';

export class TypeormUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModelRepository: Repository<UserModel>,
  ) {}

  async getByEmail(email: string): Promise<User | undefined> {
    const userModel = await this.userModelRepository.findOneBy({ email });

    if (userModel) {
      return this.userModelToUserEntity(userModel);
    }
  }

  async save(user: User): Promise<User> {
    const userModel = this.userEntityToUserModel(user);

    await userModel.save();
    return user;
  }

  async update(id: Id, user: User): Promise<User> {
    const userModel = this.userEntityToUserModel(user);

    await userModel.save();
    return user;
  }

  async getById(id: Id): Promise<User> {
    const userModel = await this.userModelRepository.findOneBy({
      id: id.value,
    });

    if (userModel) {
      return this.userModelToUserEntity(userModel);
    }
  }

  async getAll(): Promise<User[]> {
    const usersModels = await this.userModelRepository.find();
    const users: User[] = [];
    for (const userModel of usersModels) {
      users.push(this.userModelToUserEntity(userModel));
    }

    return users;
  }
  async delete(id: Id): Promise<void> {
    const deletedUserModelResult = await this.userModelRepository.delete({
      id: id.value,
    });

    if (!deletedUserModelResult.affected) {
      throw new Error('Error on deleting the user');
    }
  }

  private userEntityToUserModel(user: User) {
    const userModel = new UserModel();
    userModel.id = user.id.value;
    userModel.name = user.name;
    userModel.email = user.email;
    userModel.password = user.password;

    return userModel;
  }

  private userModelToUserEntity(userModel: UserModel) {
    return new User(
      userModel.name,
      userModel.email,
      userModel.password,
      userModel.id,
    );
  }
}
