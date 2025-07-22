import { IsString, Length, IsOptional, IsUrl, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 64)
  username: string;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  about?: string = 'Пока ничего не рассказал о себе';

  @IsOptional()
  @IsUrl()
  avatar?: string = 'https://i.pravatar.cc/300';

  @IsEmail()
  email: string;

  @IsString()
  @Length(0)
  password: string;
}
