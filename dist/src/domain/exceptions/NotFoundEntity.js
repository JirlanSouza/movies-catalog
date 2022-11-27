"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundEntityExeption = void 0;
class NotFoundEntityExeption extends Error {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Entity does not exist');
    }
}
exports.NotFoundEntityExeption = NotFoundEntityExeption;
