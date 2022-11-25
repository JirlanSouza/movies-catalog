import { Repository } from '../core/Repository';
import { Movie } from '../entities/Movie';
export interface MoviesReposiotry extends Repository<Movie> {
    getByTitle(title: string): Promise<Movie | undefined>;
}
