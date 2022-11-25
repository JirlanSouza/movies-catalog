import { ApiProperty } from '@nestjs/swagger';
import { UserWithOutPassword } from 'src/application/useCases/user/UserDto';

export class CreateUserPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  constructor(data: UserWithOutPassword) {
    this.id = data.id.value;
    this.name = data.name;
    this.email = data.email;
  }
}
