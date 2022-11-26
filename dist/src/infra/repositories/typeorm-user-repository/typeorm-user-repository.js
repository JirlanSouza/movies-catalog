"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormUserRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const User_1 = require("../../../domain/entities/User");
const user_model_1 = require("../../models/user-model");
const typeorm_2 = require("typeorm");
let TypeormUserRepository = class TypeormUserRepository {
    constructor(userModelRepository) {
        this.userModelRepository = userModelRepository;
    }
    async getByEmail(email) {
        const userModel = await this.userModelRepository.findOneBy({ email });
        if (userModel) {
            return this.userModelToUserEntity(userModel);
        }
    }
    async save(user) {
        const userModel = this.userEntityToUserModel(user);
        await userModel.save();
        return user;
    }
    async update(id, user) {
        const userModel = this.userEntityToUserModel(user);
        await userModel.save();
        return user;
    }
    async getById(id) {
        const userModel = await this.userModelRepository.findOneBy({
            id: id.value,
        });
        if (userModel) {
            return this.userModelToUserEntity(userModel);
        }
    }
    async getAll() {
        const usersModels = await this.userModelRepository.find();
        const users = [];
        for (const userModel of usersModels) {
            users.push(this.userModelToUserEntity(userModel));
        }
        return users;
    }
    async delete(id) {
        const deletedUserModelResult = await this.userModelRepository.delete({
            id: id.value,
        });
        if (!deletedUserModelResult.affected) {
            throw new Error('Error on deleting the user');
        }
    }
    userEntityToUserModel(user) {
        const userModel = new user_model_1.UserModel();
        userModel.id = user.id.value;
        userModel.name = user.name;
        userModel.email = user.email;
        userModel.password = user.password;
        return userModel;
    }
    userModelToUserEntity(userModel) {
        return new User_1.User(userModel.name, userModel.email, userModel.password, userModel.id);
    }
};
TypeormUserRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeormUserRepository);
exports.TypeormUserRepository = TypeormUserRepository;
//# sourceMappingURL=typeorm-user-repository.js.map