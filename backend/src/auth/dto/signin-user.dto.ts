import { IsString, Length } from 'class-validator';

export class SigninUserDto {
  @IsString()
  @Length(1, 64)
  username: string;

  @IsString()
  @Length(0)
  password: string;
}
