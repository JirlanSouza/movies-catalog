import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { CreateMovieControllerDto } from './Dtos/CreateMovieDto';
import { GetMoviesParamsDto } from './Dtos/GetMovieDto';
import { ManyMoviesPresenter } from './presenters/ManyMoviesPresenter';
import { MoviePresenter } from './presenters/moviePresenter';
export declare class MoviesController {
    private readonly createMovieUseCase;
    private readonly getManyMoviesUseCase;
    private readonly getMovieUseCase;
    constructor(createMovieUseCase: UseCaseProxy<CreateMovieUseCase>, getManyMoviesUseCase: UseCaseProxy<GetManyMoviesUseCase>, getMovieUseCase: UseCaseProxy<GetMovieUseCase>);
    create(createMovieDto: CreateMovieControllerDto): Promise<MoviePresenter>;
    getManyMovies(): Promise<ManyMoviesPresenter>;
    getMovie(getMovieParams: GetMoviesParamsDto): Promise<MoviePresenter>;
}
