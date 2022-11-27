"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUseCase = void 0;
const IncorrectEmailOrPassword_1 = require("../../exceptions/IncorrectEmailOrPassword");
class SignInUseCase {
    constructor(usersRepository, hasher, jwt, logger) {
        this.usersRepository = usersRepository;
        this.hasher = hasher;
        this.jwt = jwt;
        this.logger = logger;
    }
    async execute(data) {
        const user = await this.usersRepository.getByEmail(data.email);
        if (!user) {
            throw new IncorrectEmailOrPassword_1.IncorrectEmailOrPassword();
        }
        const isMatchPassword = this.hasher.compare(data.password, user.password);
        if (!isMatchPassword) {
            throw new IncorrectEmailOrPassword_1.IncorrectEmailOrPassword();
        }
        const token = this.jwt.signIn({ userId: user.id.value });
        return {
            user: {
                id: user.id.value,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
}
exports.SignInUseCase = SignInUseCase;
