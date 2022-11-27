"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Id = void 0;
const uuid_1 = require("uuid");
const InvalidCreateEntityARgument_1 = require("../exceptions/InvalidCreateEntityARgument");
class Id {
    constructor(value) {
        this.value = value;
    }
    static new() {
        return new Id((0, uuid_1.v4)());
    }
    static from(idValue) {
        if ((0, uuid_1.validate)(idValue)) {
            return new Id(idValue);
        }
        throw new InvalidCreateEntityARgument_1.InvalidCreateEntityArgumentExeption('Invalid id ');
    }
}
exports.Id = Id;
