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
exports.SignInPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignedUserPresenter {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' }),
    __metadata("design:type", String)
], SignedUserPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Joe Jhon' }),
    __metadata("design:type", String)
], SignedUserPresenter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'joejhon@email.com' }),
    __metadata("design:type", String)
], SignedUserPresenter.prototype, "email", void 0);
class SignInPresenter {
    constructor(data) {
        this.user = data.user;
        this.token = data.token;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", SignedUserPresenter)
], SignInPresenter.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE5ODc0Zi0xYjg1LTRmODMtOTY0My0zMTlhMDlkYzY3NGMiLCJpYXQiOjE2Njk0ODg2NTV9.xibiDx3ZaQEwp_QcWcsfcH1R_xCNmIwnuS7T7xRERx8',
    }),
    __metadata("design:type", String)
], SignInPresenter.prototype, "token", void 0);
exports.SignInPresenter = SignInPresenter;
