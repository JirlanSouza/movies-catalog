import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieUseCase } from 'src/application/useCases/movie/CreateMovie';
import { UseCasesProxyModule } from 'src/infra/use-cases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from 'src/infra/use-cases-proxy/useCasesProxy';
import { ExceptionPresenter } from '../exceptionPresenter';
import { CreateMovieControllerDto } from './CreateMovieDto';
import { MoviePresenter } from './moviePresenter';

@ApiTags('movies')
@ApiResponse({ status: 500, type: ExceptionPresenter })
@Controller('movies')
export class MoviesController {
  constructor(
    @Inject(UseCasesProxyModule.proxy.CREATE_MOVIE_USECASE)
    private readonly createMovieUseCase: UseCaseProxy<CreateMovieUseCase>,
  ) {}

  @ApiResponse({ status: 201, type: MoviePresenter })
  @ApiResponse({ status: 400, type: ExceptionPresenter })
  @ApiResponse({ status: 409, type: ExceptionPresenter })
  @Post()
  async create(
    @Body() createMovieDto: CreateMovieControllerDto,
  ): Promise<MoviePresenter> {
    const createMovieResult = await this.createMovieUseCase
      .getInstance()
      .execute(createMovieDto);

    return new MoviePresenter(createMovieResult);
  }
}
