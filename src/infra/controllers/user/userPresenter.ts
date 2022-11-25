import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
