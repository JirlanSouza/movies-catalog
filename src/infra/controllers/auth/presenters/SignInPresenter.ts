import { ApiProperty } from '@nestjs/swagger';
import { SignInResultDto } from 'src/application/useCases/auth/AuthDtos';

class SignedUserPresenter {
  @ApiProperty({ example: 'f419874f-1b85-4f83-9643-319a09dc674c' })
  id: string;

  @ApiProperty({ example: 'Joe Jhon' })
  name: string;

  @ApiProperty({ example: 'joejhon@email.com' })
  email: string;
}

export class SignInPresenter implements SignInResultDto {
  @ApiProperty()
  user: SignedUserPresenter;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE5ODc0Zi0xYjg1LTRmODMtOTY0My0zMTlhMDlkYzY3NGMiLCJpYXQiOjE2Njk0ODg2NTV9.xibiDx3ZaQEwp_QcWcsfcH1R_xCNmIwnuS7T7xRERx8',
  })
  token: string;

  constructor(data: SignInResultDto) {
    this.user = data.user;
    this.token = data.token;
  }
}
