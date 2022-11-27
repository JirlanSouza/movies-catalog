"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyExistExeption = void 0;
class AlreadyExistExeption extends Error {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Already exist error');
    }
}
exports.AlreadyExistExeption = AlreadyExistExeption;
