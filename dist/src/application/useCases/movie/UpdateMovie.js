"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieUseCase = void 0;
const doesExistException_1 = require("../../exceptions/doesExistException");
const Id_1 = require("../../../domain/core/Id");
const Movie_1 = require("../../../domain/entities/Movie");
class UpdateMovieUseCase {
    constructor(moviesrepository, logger) {
        this.moviesrepository = moviesrepository;
        this.logger = logger;
    }
    async execute(movieId, data) {
        const id = Id_1.Id.from(movieId);
        const movie = await this.moviesrepository.getById(id);
        if (!movie) {
            throw new doesExistException_1.DoesNotExist('This movie does not exist');
        }
        const updatedMovie = new Movie_1.Movie(data, id.value);
        await this.moviesrepository.update(id, updatedMovie);
        this.logger.log('UpdateMovieUseCase execute', `The movie with id: ${id.value} has been updated`);
        return updatedMovie;
    }
}
exports.UpdateMovieUseCase = UpdateMovieUseCase;
//# sourceMappingURL=UpdateMovie.js.map