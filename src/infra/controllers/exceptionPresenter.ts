import { ApiResponseProperty } from '@nestjs/swagger';

export class ExceptionPresenter {
  @ApiResponseProperty({ example: 500 })
  statusCode: number;

  @ApiResponseProperty({ example: new Date().toISOString() })
  tumestamp: string;

  @ApiResponseProperty({ example: '/users' })
  path: string;

  @ApiResponseProperty({ example: 'Internal server error' })
  message: string;
}

export class BadRequestPresenter extends ExceptionPresenter {
  @ApiResponseProperty({ example: 400 })
  statusCode: number;

  @ApiResponseProperty({ example: 'Bad request' })
  message: string;
}

export class UnauthorizedPresenter extends ExceptionPresenter {
  @ApiResponseProperty({ example: 401 })
  statusCode: number;

  @ApiResponseProperty({ example: 'Unauthorized' })
  message: string;
}

export class NotFoundPresenter extends ExceptionPresenter {
  @ApiResponseProperty({ example: 404 })
  statusCode: number;

  @ApiResponseProperty({ example: 'Not found' })
  message: string;
}

export class ConflictPresenter extends ExceptionPresenter {
  @ApiResponseProperty({ example: 409 })
  statusCode: number;

  @ApiResponseProperty({ example: 'Conflict' })
  message: string;
}
