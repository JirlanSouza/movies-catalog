"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_module_1 = require("../config/typeorm/typeorm.module");
const movie_model_1 = require("../models/movie-model");
const user_model_1 = require("../models/user-model");
const typeorm_movies_reoisitory_1 = require("./typeorm-movies-reoisitory/typeorm-movies-reoisitory");
const typeorm_user_repository_1 = require("./typeorm-user-repository/typeorm-user-repository");
let RepositoriesModule = class RepositoriesModule {
};
RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_module_1.TypeormModule, typeorm_1.TypeOrmModule.forFeature([user_model_1.UserModel, movie_model_1.MovieModel])],
        providers: [typeorm_user_repository_1.TypeormUserRepository, typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
        exports: [typeorm_user_repository_1.TypeormUserRepository, typeorm_movies_reoisitory_1.TypeormMoviesReoisitory],
    })
], RepositoriesModule);
exports.RepositoriesModule = RepositoriesModule;
