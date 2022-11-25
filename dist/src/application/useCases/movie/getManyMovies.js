"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetManyMoviesUseCase = void 0;
class GetManyMoviesUseCase {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async execute() {
        const movies = await this.moviesRepository.getAll();
        return movies;
    }
}
exports.GetManyMoviesUseCase = GetManyMoviesUseCase;
//# sourceMappingURL=getManyMovies.js.map