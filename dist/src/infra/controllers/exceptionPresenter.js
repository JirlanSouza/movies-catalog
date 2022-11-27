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
exports.ConflictPresenter = exports.NotFoundPresenter = exports.UnauthorizedPresenter = exports.BadRequestPresenter = exports.ExceptionPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class ExceptionPresenter {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 500 }),
    __metadata("design:type", Number)
], ExceptionPresenter.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: new Date().toISOString() }),
    __metadata("design:type", String)
], ExceptionPresenter.prototype, "tumestamp", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: '/users' }),
    __metadata("design:type", String)
], ExceptionPresenter.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 'Internal server error' }),
    __metadata("design:type", String)
], ExceptionPresenter.prototype, "message", void 0);
exports.ExceptionPresenter = ExceptionPresenter;
class BadRequestPresenter extends ExceptionPresenter {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 400 }),
    __metadata("design:type", Number)
], BadRequestPresenter.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 'Bad request' }),
    __metadata("design:type", String)
], BadRequestPresenter.prototype, "message", void 0);
exports.BadRequestPresenter = BadRequestPresenter;
class UnauthorizedPresenter extends ExceptionPresenter {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 401 }),
    __metadata("design:type", Number)
], UnauthorizedPresenter.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], UnauthorizedPresenter.prototype, "message", void 0);
exports.UnauthorizedPresenter = UnauthorizedPresenter;
class NotFoundPresenter extends ExceptionPresenter {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 404 }),
    __metadata("design:type", Number)
], NotFoundPresenter.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 'Not found' }),
    __metadata("design:type", String)
], NotFoundPresenter.prototype, "message", void 0);
exports.NotFoundPresenter = NotFoundPresenter;
class ConflictPresenter extends ExceptionPresenter {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 409 }),
    __metadata("design:type", Number)
], ConflictPresenter.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], ConflictPresenter.prototype, "message", void 0);
exports.ConflictPresenter = ConflictPresenter;
