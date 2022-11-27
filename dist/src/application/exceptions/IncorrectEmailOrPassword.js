"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectEmailOrPassword = void 0;
class IncorrectEmailOrPassword extends Error {
    constructor() {
        super('Icorrect email or password');
    }
}
exports.IncorrectEmailOrPassword = IncorrectEmailOrPassword;
