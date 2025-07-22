import { Expose } from 'class-transformer';
import { IsEmail, IsInt, IsString, IsUrl, Length } from 'class-validator';

export class UpdateMyProfileInfoResponseDto {
  @Expose()
  @IsInt()
  id: number;

  @Expose()
  @Length(1, 64)
  username: string;

  @Expose()
  @IsString()
  @Length(1, 200)
  about: string;

  @Expose()
  @IsUrl()
  avatar: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsString()
  createdAt: string;

  @Expose()
  @IsString()
  updatedAt: string;
}
