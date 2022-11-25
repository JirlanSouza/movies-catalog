"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovieUseCase = void 0;
const Id_1 = require("../../../domain/core/Id");
const doesExistException_1 = require("../../exceptions/doesExistException");
class GetMovieUseCase {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async execute(movieId) {
        const id = Id_1.Id.from(movieId);
        const movie = await this.moviesRepository.getById(id);
        if (!movie) {
            throw new doesExistException_1.DoesNotExist('This movie does not exist');
        }
        return movie;
    }
}
exports.GetMovieUseCase = GetMovieUseCase;
//# sourceMappingURL=getMovie.js.map