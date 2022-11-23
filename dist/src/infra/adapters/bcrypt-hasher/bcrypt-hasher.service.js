"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BcryptHasherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHasherService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let BcryptHasherService = BcryptHasherService_1 = class BcryptHasherService {
    hash(data) {
        console.log(data, BcryptHasherService_1.rounds);
        return (0, bcrypt_1.hashSync)(data, BcryptHasherService_1.rounds);
    }
    compare(data, hash) {
        return (0, bcrypt_1.compareSync)(data, hash);
    }
};
BcryptHasherService.rounds = 8;
BcryptHasherService = BcryptHasherService_1 = __decorate([
    (0, common_1.Injectable)()
], BcryptHasherService);
exports.BcryptHasherService = BcryptHasherService;
//# sourceMappingURL=bcrypt-hasher.service.js.map