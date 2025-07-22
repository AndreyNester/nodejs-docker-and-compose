import { IsString, IsUrl, IsEmail, Length, IsOptional } from 'class-validator';

export class UpdateMyProfileInfoRequestDto {
  @IsString()
  @Length(1, 64)
  @IsOptional()
  username?: string;

  @IsOptional()
  @Length(0, 200)
  about?: string;

  @IsOptional()
  @IsUrl()
  avatar?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Length(2)
  password?: string;
}
