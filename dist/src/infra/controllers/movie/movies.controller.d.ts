import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { CreateMovieControllerDto } from './CreateMovieDto';
import { MoviePresenter } from './moviePresenter';
export declare class MoviesController {
    private readonly createMovieUseCase;
    constructor(createMovieUseCase: UseCaseProxy<CreateMovieUseCase>);
    create(createMovieDto: CreateMovieControllerDto): Promise<MoviePresenter>;
}
