"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovieUseCase = void 0;
const doesExistException_1 = require("../../exceptions/doesExistException");
const Id_1 = require("../../../domain/core/Id");
class DeleteMovieUseCase {
    constructor(moviesRepository, logger) {
        this.moviesRepository = moviesRepository;
        this.logger = logger;
    }
    async execute(movieId) {
        const id = Id_1.Id.from(movieId);
        const movie = await this.moviesRepository.getById(id);
        if (!movie) {
            throw new doesExistException_1.DoesNotExist('This movie does not exist');
        }
        await this.moviesRepository.delete(id);
        this.logger.log('DeletemovieUseCase execute', `The movie with id: ${id.value} has been deleted`);
    }
}
exports.DeleteMovieUseCase = DeleteMovieUseCase;
//# sourceMappingURL=DeleteMovie.js.map