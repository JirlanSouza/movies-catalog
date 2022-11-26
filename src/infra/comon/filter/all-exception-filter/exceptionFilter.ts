import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AlreadyExistExeption } from 'src/application/exceptions/alreadyExist';
import { DoesNotExist } from 'src/application/exceptions/doesExistException';
import { ApplicationLogger } from 'src/application/logger/logger';
import { InvalidCreateEntityArgumentExeption } from 'src/domain/exceptions/InvalidCreateEntityARgument';
import { NotFoundEntityExeption } from 'src/domain/exceptions/NotFoundEntity';

type ExceptionData = {
  statusCode: HttpStatus;
  message: string;
};

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logger: ApplicationLogger,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const resquest = ctx.getRequest();
    const response = ctx.getResponse();

    const { statusCode, message } = this.mapExceptionDataByInstance(exception)
      .forExpection(BadRequestException, HttpStatus.BAD_REQUEST)
      .forExpection(InvalidCreateEntityArgumentExeption, HttpStatus.BAD_REQUEST)
      .forExpection(NotFoundEntityExeption, HttpStatus.NOT_FOUND)
      .forExpection(DoesNotExist, HttpStatus.NOT_FOUND)
      .forExpection(AlreadyExistExeption, HttpStatus.CONFLICT).exceptionData;

    const responseData = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: resquest.url,
      message,
    };

    this.logMessage(resquest, statusCode, exception);
    httpAdapter.reply(response, responseData, statusCode);
  }

  private mapExceptionDataByInstance(exception: any, data?: ExceptionData) {
    let exceptionData = data ?? {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };

    const forExpection = (exptionClass: any, statusCode: HttpStatus) => {
      if (exception instanceof exptionClass) {
        exceptionData = {
          statusCode,
          message: exception?.response?.message ?? exception.message,
        };
      }

      return this.mapExceptionDataByInstance(exception, exceptionData);
    };

    return {
      forExpection,
      exceptionData,
    };
  }

  private logMessage(request: any, statusCode: HttpStatus, exception: any) {
    if (statusCode === HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `End request for ${request.path}`,
        `method = ${request.method} status = ${statusCode} message = ${exception.message}
        stack = ${exception.stack}
        `,
      );

      return;
    }

    this.logger.warn(
      `End request for ${request.path}`,
      `method = ${request.method} status = ${statusCode} message = ${
        exception?.response?.message ?? exception.message
      }`,
    );
  }
}
