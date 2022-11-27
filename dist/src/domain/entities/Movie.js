"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const Entity_1 = require("../core/Entity");
class Movie extends Entity_1.Entity {
    constructor(data, id) {
        super(id);
        this.title = data.title;
        this.genre = data.genre;
        this.overview = data.overview;
        this.company = data.company;
        this.releaseDate = new Date(data.releaseDate);
        this.votesAvg = data.votesAvg;
        this.votesCount = data.votesCount;
        this.runtimeUrl = data.runtimeUrl;
    }
}
exports.Movie = Movie;
