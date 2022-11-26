"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const use_cases_proxy_module_1 = require("../../use-cases-proxy/use-cases-proxy.module");
const useCasesProxy_1 = require("../../use-cases-proxy/useCasesProxy");
const exceptionPresenter_1 = require("../exceptionPresenter");
const CreateMovieDto_1 = require("./Dtos/CreateMovieDto");
const DeleteMovieDto_1 = require("./Dtos/DeleteMovieDto");
const GetMovieDto_1 = require("./Dtos/GetMovieDto");
const UpdateMovieDto_1 = require("./Dtos/UpdateMovieDto");
const DeleteMoviePresenter_1 = require("./presenters/DeleteMoviePresenter");
const ManyMoviesPresenter_1 = require("./presenters/ManyMoviesPresenter");
const moviePresenter_1 = require("./presenters/moviePresenter");
let MoviesController = class MoviesController {
    constructor(createMovieUseCase, getManyMoviesUseCase, getMovieUseCase, updateMovieUseCase, deleteMovieUseCase) {
        this.createMovieUseCase = createMovieUseCase;
        this.getManyMoviesUseCase = getManyMoviesUseCase;
        this.getMovieUseCase = getMovieUseCase;
        this.updateMovieUseCase = updateMovieUseCase;
        this.deleteMovieUseCase = deleteMovieUseCase;
    }
    async create(createMovieDto) {
        const createMovieResult = await this.createMovieUseCase
            .getInstance()
            .execute(createMovieDto);
        return new moviePresenter_1.MoviePresenter(createMovieResult);
    }
    async getManyMovies() {
        const getMovieResult = await this.getManyMoviesUseCase
            .getInstance()
            .execute();
        return new ManyMoviesPresenter_1.ManyMoviesPresenter(getMovieResult);
    }
    async getMovie(getMovieParams) {
        const getMovieResult = await this.getMovieUseCase
            .getInstance()
            .execute(getMovieParams.id);
        return new moviePresenter_1.MoviePresenter(getMovieResult);
    }
    async updateMovie(updateMovieParams, updateMoviesDto) {
        const getMovieResult = await this.updateMovieUseCase
            .getInstance()
            .execute(updateMovieParams.id, updateMoviesDto);
        return new moviePresenter_1.MoviePresenter(getMovieResult);
    }
    async deleteMovie(deleteMovieParams) {
        await this.deleteMovieUseCase.getInstance().execute(deleteMovieParams.id);
        return new DeleteMoviePresenter_1.DeleteMoviePresenter();
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, type: moviePresenter_1.MoviePresenter }),
    (0, swagger_1.ApiResponse)({ status: 400, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiResponse)({ status: 409, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiOperation)({ description: 'Create new movie' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMovieDto_1.CreateMovieControllerDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: ManyMoviesPresenter_1.ManyMoviesPresenter }),
    (0, swagger_1.ApiOperation)({ description: 'Get movies' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getManyMovies", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: moviePresenter_1.MoviePresenter }),
    (0, swagger_1.ApiResponse)({ status: 400, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiResponse)({ status: 404, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiOperation)({ description: 'Get movie' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetMovieDto_1.GetMovieParamsDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovie", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: moviePresenter_1.MoviePresenter }),
    (0, swagger_1.ApiResponse)({ status: 400, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiResponse)({ status: 404, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiOperation)({ description: 'Update movie' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateMovieDto_1.UpdateMovieParamsDto,
        UpdateMovieDto_1.UpdateMovieControllerDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "updateMovie", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: DeleteMoviePresenter_1.DeleteMoviePresenter }),
    (0, swagger_1.ApiResponse)({ status: 400, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiResponse)({ status: 404, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, swagger_1.ApiOperation)({ description: 'Get movie' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteMovieDto_1.DeleteMovieParamsDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "deleteMovie", null);
MoviesController = __decorate([
    (0, swagger_1.ApiTags)('movies'),
    (0, swagger_1.ApiResponse)({ status: 500, type: exceptionPresenter_1.ExceptionPresenter }),
    (0, common_1.Controller)('movies'),
    __param(0, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.CREATE_MOVIE_USECASE)),
    __param(1, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.GET_MANY_MOVIES_USECASE)),
    __param(2, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.GET_MOVIE_USECASE)),
    __param(3, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.UPDATE_MOVIE_USECASE)),
    __param(4, (0, common_1.Inject)(use_cases_proxy_module_1.UseCasesProxyModule.proxy.DELETE_MOVIE_USECASE)),
    __metadata("design:paramtypes", [useCasesProxy_1.UseCaseProxy,
        useCasesProxy_1.UseCaseProxy,
        useCasesProxy_1.UseCaseProxy,
        useCasesProxy_1.UseCaseProxy,
        useCasesProxy_1.UseCaseProxy])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map