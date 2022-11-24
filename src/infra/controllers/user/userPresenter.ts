import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPresenter {
  @ApiProperty()
  userId: string;
}
