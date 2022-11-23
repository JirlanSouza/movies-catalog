"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Id_1 = require("./Id");
class Entity {
    constructor(id) {
        if (!id) {
            this.id = Id_1.Id.new();
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map