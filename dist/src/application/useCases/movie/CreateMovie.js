"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieUseCase = void 0;
const alreadyExist_1 = require("../../exceptions/alreadyExist");
const Movie_1 = require("../../../domain/entities/Movie");
class CreateMovieUseCase {
    constructor(moviesRepository, logger) {
        this.moviesRepository = moviesRepository;
        this.logger = logger;
    }
    async execute(data) {
        const existMovie = await this.moviesRepository.getByTitle(data.title);
        if (existMovie) {
            throw new alreadyExist_1.AlreadyExistExeption('Movie already exist');
        }
        const movieReleaseDate = new Date(data.releaseDate);
        const movie = new Movie_1.Movie(Object.assign(Object.assign({}, data), { releaseDate: movieReleaseDate }));
        await this.moviesRepository.save(movie);
        this.logger.log('CreateMovieUseCase execute', 'The new movie has been created');
        return movie;
    }
}
exports.CreateMovieUseCase = CreateMovieUseCase;
//# sourceMappingURL=CreateMovie.js.map