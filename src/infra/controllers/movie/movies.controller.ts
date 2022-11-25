import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ExceptionPresenter } from '../exceptionPresenter';
import { CreateMovieControllerDto } from './Dtos/CreateMovieDto';
import { GetMoviesParamsDto } from './Dtos/GetMovieDto';
import { ManyMoviesPresenter } from './presenters/ManyMoviesPresenter';
import { MoviePresenter } from './presenters/moviePresenter';

@ApiTags('movies')
@ApiResponse({ status: 500, type: ExceptionPresenter })
@Controller('movies')
export class MoviesController {
  constructor(
    @Inject(UseCasesProxyModule.proxy.CREATE_MOVIE_USECASE)
    private readonly createMovieUseCase: UseCaseProxy<CreateMovieUseCase>,
    @Inject(UseCasesProxyModule.proxy.GET_MANY_MOVIES_USECASE)
    private readonly getManyMoviesUseCase: UseCaseProxy<GetManyMoviesUseCase>,
    @Inject(UseCasesProxyModule.proxy.GET_MOVIE_USECASE)
    private readonly getMovieUseCase: UseCaseProxy<GetMovieUseCase>,
  ) {}

  @ApiResponse({ status: 201, type: MoviePresenter })
  @ApiResponse({ status: 400, type: ExceptionPresenter })
  @ApiResponse({ status: 409, type: ExceptionPresenter })
  @ApiOperation({ description: 'Create new movie' })
  @Post()
  async create(
    @Body() createMovieDto: CreateMovieControllerDto,
  ): Promise<MoviePresenter> {
    const createMovieResult = await this.createMovieUseCase
      .getInstance()
      .execute(createMovieDto);

    return new MoviePresenter(createMovieResult);
  }

  @ApiResponse({ status: 200, type: ManyMoviesPresenter })
  @ApiOperation({ description: 'Get movies' })
  @Get()
  async getManyMovies() {
    const getMovieResult = await this.getManyMoviesUseCase
      .getInstance()
      .execute();

    return new ManyMoviesPresenter(getMovieResult);
  }

  @ApiResponse({ status: 200, type: MoviePresenter })
  @ApiResponse({ status: 404, type: ExceptionPresenter })
  @ApiOperation({ description: 'Get movie' })
  @Get(':id')
  async getMovie(@Param() getMovieParams: GetMoviesParamsDto) {
    const getMovieResult = await this.getMovieUseCase
      .getInstance()
      .execute(getMovieParams.id);

    return new MoviePresenter(getMovieResult);
  }
}
