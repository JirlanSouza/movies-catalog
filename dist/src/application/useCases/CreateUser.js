"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../domain/entities/User");
class CreateUserUseCase {
    constructor(userRepository, hasher) {
        this.userRepository = userRepository;
        this.hasher = hasher;
    }
    async execute(input) {
        const existUser = await this.userRepository.getByEmail(input.email);
        if (existUser) {
            throw new Error('User already exist');
        }
        const user = new User_1.User(input.name, input.email, input.password);
        console.log(user);
        const passwordHash = this.hasher.hash(user.password);
        await this.userRepository.save(Object.assign(Object.assign({}, user), { password: passwordHash }));
        return user.id;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUser.js.map