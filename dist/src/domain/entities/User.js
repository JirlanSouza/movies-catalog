"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Entity_1 = require("../core/Entity");
class User extends Entity_1.Entity {
    constructor(name, email, password, id) {
        super(id);
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
