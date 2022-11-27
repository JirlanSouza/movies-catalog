"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInControllerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignInControllerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'joejhon@email.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignInControllerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Asdf89gh' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInControllerDto.prototype, "password", void 0);
exports.SignInControllerDto = SignInControllerDto;
//# sourceMappingURL=SignInDto.js.map