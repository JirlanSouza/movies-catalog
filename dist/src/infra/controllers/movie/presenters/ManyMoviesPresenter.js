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
exports.ManyMoviesPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
const moviePresenter_1 = require("./moviePresenter");
class ManyMoviesPresenter {
    constructor(movies) {
        this.data = movies.map((movie) => new moviePresenter_1.MoviePresenter(movie));
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ManyMoviesPresenter.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ManyMoviesPresenter.prototype, "nextUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: moviePresenter_1.MoviePresenter, isArray: true }),
    __metadata("design:type", Array)
], ManyMoviesPresenter.prototype, "data", void 0);
exports.ManyMoviesPresenter = ManyMoviesPresenter;
