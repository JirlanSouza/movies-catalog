import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/application/useCases/CreateUser';

export class CreateUserControllerDto implements CreateUserDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;
}
