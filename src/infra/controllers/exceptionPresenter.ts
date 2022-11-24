import { ApiResponseProperty } from '@nestjs/swagger';

export class ExceptionPresenter {
  @ApiResponseProperty()
  statusCode: number;

  @ApiResponseProperty()
  tumestamp: string;

  @ApiResponseProperty()
  path: string;

  @ApiResponseProperty()
  message: string;
}
