import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from 'src/application/useCases/user/CreateUser';

export class CreateUserControllerDto implements CreateUserDto {
  @ApiProperty({ required: true, example: 'Joe jhon' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'joejhon@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true, example: 'Asdf89gh' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
