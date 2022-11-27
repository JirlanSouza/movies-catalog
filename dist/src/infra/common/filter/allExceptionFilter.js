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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const alreadyExist_1 = require("../../../application/exceptions/alreadyExist");
const doesExistException_1 = require("../../../application/exceptions/doesExistException");
const IncorrectEmailOrPassword_1 = require("../../../application/exceptions/IncorrectEmailOrPassword");
const InvalidCreateEntityARgument_1 = require("../../../domain/exceptions/InvalidCreateEntityARgument");
const NotFoundEntity_1 = require("../../../domain/exceptions/NotFoundEntity");
let AllExceptionFilter = class AllExceptionFilter {
    constructor(httpAdapterHost, logger) {
        this.httpAdapterHost = httpAdapterHost;
        this.logger = logger;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const resquest = ctx.getRequest();
        const response = ctx.getResponse();
        const { statusCode, message } = this.mapExceptionDataByInstance(exception)
            .forExpection(common_1.BadRequestException, common_1.HttpStatus.BAD_REQUEST)
            .forExpection(common_1.UnauthorizedException, common_1.HttpStatus.UNAUTHORIZED)
            .forExpection(IncorrectEmailOrPassword_1.IncorrectEmailOrPassword, common_1.HttpStatus.UNAUTHORIZED)
            .forExpection(InvalidCreateEntityARgument_1.InvalidCreateEntityArgumentExeption, common_1.HttpStatus.BAD_REQUEST)
            .forExpection(NotFoundEntity_1.NotFoundEntityExeption, common_1.HttpStatus.NOT_FOUND)
            .forExpection(doesExistException_1.DoesNotExist, common_1.HttpStatus.NOT_FOUND)
            .forExpection(alreadyExist_1.AlreadyExistExeption, common_1.HttpStatus.CONFLICT).exceptionData;
        const responseData = {
            statusCode,
            timestamp: new Date().toISOString(),
            path: resquest.url,
            message,
        };
        this.logMessage(resquest, statusCode, exception);
        httpAdapter.reply(response, responseData, statusCode);
    }
    mapExceptionDataByInstance(exception, data) {
        let exceptionData = data !== null && data !== void 0 ? data : {
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
        };
        const forExpection = (exptionClass, statusCode) => {
            var _a, _b;
            if (exception instanceof exptionClass) {
                exceptionData = {
                    statusCode,
                    message: (_b = (_a = exception === null || exception === void 0 ? void 0 : exception.response) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : exception.message,
                };
            }
            return this.mapExceptionDataByInstance(exception, exceptionData);
        };
        return {
            forExpection,
            exceptionData,
        };
    }
    logMessage(request, statusCode, exception) {
        var _a, _b;
        if (statusCode === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            this.logger.error(`End request for ${request.path}`, `method = ${request.method} status = ${statusCode} message = ${exception.message}
        stack = ${exception.stack}
        `);
            return;
        }
        this.logger.warn(`End request for ${request.path}`, `method = ${request.method} status = ${statusCode} message = ${(_b = (_a = exception === null || exception === void 0 ? void 0 : exception.response) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : exception.message}`);
    }
};
AllExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost, Object])
], AllExceptionFilter);
exports.AllExceptionFilter = AllExceptionFilter;
