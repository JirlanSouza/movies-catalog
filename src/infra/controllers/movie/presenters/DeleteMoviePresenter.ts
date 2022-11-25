import { ApiProperty } from '@nestjs/swagger';

export class DeleteMoviePresenter {
  @ApiProperty({ type: String, example: 'Movie successfully has been deleted' })
  readonly message = 'Movie successfully has been deleted';
}
