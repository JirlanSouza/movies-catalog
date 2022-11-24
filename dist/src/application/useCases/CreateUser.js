"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../domain/entities/User");
const alreadyExist_1 = require("../exceptions/alreadyExist");
class CreateUserUseCase {
    constructor(userRepository, hasher, logger) {
        this.userRepository = userRepository;
        this.hasher = hasher;
        this.logger = logger;
    }
    async execute(input) {
        const existUser = await this.userRepository.getByEmail(input.email);
        if (existUser) {
            throw new alreadyExist_1.AlreadyExistExeption('User already exist');
        }
        const user = new User_1.User(input.name, input.email, input.password);
        const passwordHash = this.hasher.hash(user.password);
        await this.userRepository.save(Object.assign(Object.assign({}, user), { password: passwordHash }));
        this.logger.log('CreateUserUseCase execute', 'New user has been created');
        return user.id;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUser.js.map