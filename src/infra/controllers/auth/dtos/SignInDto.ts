import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { SignInDto } from 'src/application/useCases/auth/AuthDtos';

export class SignInControllerDto implements SignInDto {
  @ApiProperty({ example: 'joejhon@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Asdf89gh' })
  @IsNotEmpty()
  password: string;
}
