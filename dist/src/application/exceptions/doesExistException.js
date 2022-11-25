"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoesNotExist = void 0;
class DoesNotExist extends Error {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Does not exist');
    }
}
exports.DoesNotExist = DoesNotExist;
//# sourceMappingURL=doesExistException.js.map