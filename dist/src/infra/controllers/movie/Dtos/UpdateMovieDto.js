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
exports.UpdateMovieControllerDto = exports.UpdateMovieParamsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMovieParamsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' }),
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], UpdateMovieParamsDto.prototype, "id", void 0);
exports.UpdateMovieParamsDto = UpdateMovieParamsDto;
class UpdateMovieControllerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Titanic' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieControllerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Drama' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieControllerDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieControllerDto.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Paramount Pictures' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieControllerDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: new Date('1997-12-19T00:00:00.000').toLocaleDateString('pt-br'),
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateMovieControllerDto.prototype, "releaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 8 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateMovieControllerDto.prototype, "votesAvg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 18264 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateMovieControllerDto.prototype, "votesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'https://movies-catalog.com/data/movies/f419874f-1b85-4f83-9643-319a09dc674c',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateMovieControllerDto.prototype, "runtimeUrl", void 0);
exports.UpdateMovieControllerDto = UpdateMovieControllerDto;
