import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { DeleteMovieUseCase } from 'src/application/useCases/movie/DeleteMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UpdateMovieUseCase } from 'src/application/useCases/movie/UpdateMovie';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { CreateMovieControllerDto } from './Dtos/CreateMovieDto';
import { DeleteMovieParamsDto } from './Dtos/DeleteMovieDto';
import { GetMovieParamsDto } from './Dtos/GetMovieDto';
import { UpdateMovieControllerDto, UpdateMovieParamsDto } from './Dtos/UpdateMovieDto';
import { DeleteMoviePresenter } from './presenters/DeleteMoviePresenter';
import { ManyMoviesPresenter } from './presenters/ManyMoviesPresenter';
import { MoviePresenter } from './presenters/moviePresenter';
export declare class MoviesController {
    private readonly createMovieUseCase;
    private readonly getManyMoviesUseCase;
    private readonly getMovieUseCase;
    private readonly updateMovieUseCase;
    private readonly deleteMovieUseCase;
    constructor(createMovieUseCase: UseCaseProxy<CreateMovieUseCase>, getManyMoviesUseCase: UseCaseProxy<GetManyMoviesUseCase>, getMovieUseCase: UseCaseProxy<GetMovieUseCase>, updateMovieUseCase: UseCaseProxy<UpdateMovieUseCase>, deleteMovieUseCase: UseCaseProxy<DeleteMovieUseCase>);
    create(createMovieDto: CreateMovieControllerDto): Promise<MoviePresenter>;
    getManyMovies(): Promise<ManyMoviesPresenter>;
    getMovie(getMovieParams: GetMovieParamsDto): Promise<MoviePresenter>;
    updateMovie(updateMovieParams: UpdateMovieParamsDto, updateMoviesDto: UpdateMovieControllerDto): Promise<MoviePresenter>;
    deleteMovie(deleteMovieParams: DeleteMovieParamsDto): Promise<DeleteMoviePresenter>;
}
