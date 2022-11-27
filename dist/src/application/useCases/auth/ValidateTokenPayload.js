"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateTokenPayloadUseCase = void 0;
const Id_1 = require("../../../domain/core/Id");
class ValidateTokenPayloadUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(payload) {
        const id = Id_1.Id.from(payload.userId);
        const user = await this.usersRepository.getById(id);
        if (user) {
            return {
                id: user.id.value,
                name: user.name,
                email: user.email,
            };
        }
    }
}
exports.ValidateTokenPayloadUseCase = ValidateTokenPayloadUseCase;
