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
exports.MoviePresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class MoviePresenter {
    constructor(data) {
        this.id = data.id.value;
        this.title = data.title;
        this.genre = data.genre;
        this.overview = data.overview;
        this.company = data.company;
        this.releaseDate = data.releaseDate.toLocaleString('pt-br');
        this.votesAvg = data.votesAvg;
        this.votesCount = data.votesCount;
        this.runtimeUrl = data.runtimeUrl;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Titanic' }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Drama' }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Paramount Pictures' }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: new Date('1997-12-19T00:00:00.000').toLocaleDateString('pt-br'),
    }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "releaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    __metadata("design:type", Number)
], MoviePresenter.prototype, "votesAvg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 18264 }),
    __metadata("design:type", Number)
], MoviePresenter.prototype, "votesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://movies-catalog.com/data/movies/f419874f-1b85-4f83-9643-319a09dc674c',
    }),
    __metadata("design:type", String)
], MoviePresenter.prototype, "runtimeUrl", void 0);
exports.MoviePresenter = MoviePresenter;
//# sourceMappingURL=moviePresenter.js.map