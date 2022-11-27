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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormMoviesReoisitory = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const Movie_1 = require("../../../domain/entities/Movie");
const movie_model_1 = require("../../models/movie-model");
const typeorm_2 = require("typeorm");
let TypeormMoviesReoisitory = class TypeormMoviesReoisitory {
    constructor(moviesModelRepository) {
        this.moviesModelRepository = moviesModelRepository;
    }
    async getByTitle(title) {
        const movieModel = await this.moviesModelRepository.findOneBy({ title });
        if (movieModel) {
            return this.movieModelToMovie(movieModel);
        }
    }
    async save(entity) {
        const movieModel = this.movieToMovieModel(entity);
        const savedMovieModel = await movieModel.save();
        if (savedMovieModel) {
            return entity;
        }
    }
    async update(id, entity) {
        const movieModel = this.movieToMovieModel(entity);
        const savedMovieModel = await movieModel.save();
        if (savedMovieModel) {
            return entity;
        }
    }
    async getById(id) {
        const movieModel = await this.moviesModelRepository.findOneBy({
            id: id.value,
        });
        if (movieModel) {
            return this.movieModelToMovie(movieModel);
        }
    }
    async getAll() {
        const moviesModel = await this.moviesModelRepository.find();
        return moviesModel.map((movieModel) => this.movieModelToMovie(movieModel));
    }
    async delete(id) {
        const deletedMovieModelResult = await this.moviesModelRepository.delete(id.value);
        if (!deletedMovieModelResult.affected) {
            throw new Error('Error on deleting the movie');
        }
    }
    movieModelToMovie(movieModel) {
        return new Movie_1.Movie(Object.assign({}, movieModel), movieModel.id);
    }
    movieToMovieModel(movie) {
        const movieModel = new movie_model_1.MovieModel();
        movieModel.id = movie.id.value;
        movieModel.title = movie.title;
        movieModel.genre = movie.genre;
        movieModel.overview = movie.overview;
        movieModel.company = movie.company;
        movieModel.releaseDate = movie.releaseDate;
        movieModel.votesAvg = movie.votesAvg;
        movieModel.votesCount = movie.votesCount;
        movieModel.runtimeUrl = movie.runtimeUrl;
        return movieModel;
    }
};
TypeormMoviesReoisitory = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(movie_model_1.MovieModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeormMoviesReoisitory);
exports.TypeormMoviesReoisitory = TypeormMoviesReoisitory;
