import {
  Body,
  CacheInterceptor,
  UseInterceptors,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { DeleteMovieUseCase } from 'src/application/useCases/movie/DeleteMovie';
import { GetManyMoviesUseCase } from 'src/application/useCases/movie/getManyMovies';
import { GetMovieUseCase } from 'src/application/useCases/movie/getMovie';
import { UpdateMovieUseCase } from 'src/application/useCases/movie/UpdateMovie';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import {
  BadRequestPresenter,
  ConflictPresenter,
  ExceptionPresenter,
  NotFoundPresenter,
  UnauthorizedPresenter,
} from '../exceptionPresenter';
import { CreateMovieControllerDto } from './Dtos/CreateMovieDto';
import { DeleteMovieParamsDto } from './Dtos/DeleteMovieDto';
import { GetMovieParamsDto } from './Dtos/GetMovieDto';
import {
  UpdateMovieControllerDto,
  UpdateMovieParamsDto,
} from './Dtos/UpdateMovieDto';
import { DeleteMoviePresenter } from './presenters/DeleteMoviePresenter';
import { ManyMoviesPresenter } from './presenters/ManyMoviesPresenter';
import { MoviePresenter } from './presenters/moviePresenter';

@ApiTags('movies')
@ApiBearerAuth()
@ApiResponse({ status: 500, type: ExceptionPresenter })
@ApiResponse({ status: 401, type: UnauthorizedPresenter })
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(CacheInterceptor)
@Controller('movies')
export class MoviesController {
  constructor(
    @Inject(UseCasesProxyModule.proxy.CREATE_MOVIE_USECASE)
    private readonly createMovieUseCase: UseCaseProxy<CreateMovieUseCase>,
    @Inject(UseCasesProxyModule.proxy.GET_MANY_MOVIES_USECASE)
    private readonly getManyMoviesUseCase: UseCaseProxy<GetManyMoviesUseCase>,
    @Inject(UseCasesProxyModule.proxy.GET_MOVIE_USECASE)
    private readonly getMovieUseCase: UseCaseProxy<GetMovieUseCase>,
    @Inject(UseCasesProxyModule.proxy.UPDATE_MOVIE_USECASE)
    private readonly updateMovieUseCase: UseCaseProxy<UpdateMovieUseCase>,
    @Inject(UseCasesProxyModule.proxy.DELETE_MOVIE_USECASE)
    private readonly deleteMovieUseCase: UseCaseProxy<DeleteMovieUseCase>,
  ) {}

  @ApiResponse({ status: 201, type: MoviePresenter })
  @ApiResponse({ status: 400, type: BadRequestPresenter })
  @ApiResponse({ status: 409, type: ConflictPresenter })
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
  @ApiResponse({ status: 400, type: BadRequestPresenter })
  @ApiResponse({ status: 404, type: NotFoundPresenter })
  @ApiOperation({ description: 'Get movie' })
  @Get(':id')
  async getMovie(@Param() getMovieParams: GetMovieParamsDto) {
    const getMovieResult = await this.getMovieUseCase
      .getInstance()
      .execute(getMovieParams.id);

    return new MoviePresenter(getMovieResult);
  }

  @ApiResponse({ status: 200, type: MoviePresenter })
  @ApiResponse({ status: 400, type: BadRequestPresenter })
  @ApiResponse({ status: 404, type: NotFoundPresenter })
  @ApiOperation({ description: 'Update movie' })
  @Put(':id')
  async updateMovie(
    @Param() updateMovieParams: UpdateMovieParamsDto,
    @Body() updateMoviesDto: UpdateMovieControllerDto,
  ) {
    const getMovieResult = await this.updateMovieUseCase
      .getInstance()
      .execute(updateMovieParams.id, updateMoviesDto);

    return new MoviePresenter(getMovieResult);
  }

  @ApiResponse({ status: 200, type: DeleteMoviePresenter })
  @ApiResponse({ status: 400, type: BadRequestPresenter })
  @ApiResponse({ status: 404, type: NotFoundPresenter })
  @ApiOperation({ description: 'Get movie' })
  @Delete(':id')
  async deleteMovie(@Param() deleteMovieParams: DeleteMovieParamsDto) {
    await this.deleteMovieUseCase.getInstance().execute(deleteMovieParams.id);

    return new DeleteMoviePresenter();
  }
}
