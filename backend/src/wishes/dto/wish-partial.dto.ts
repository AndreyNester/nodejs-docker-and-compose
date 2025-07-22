import { Expose } from 'class-transformer';
import { IsInt, IsString, IsUrl, IsNumber, Length } from 'class-validator';

export class WishPartialDto {
  @Expose()
  @IsInt()
  id: number;

  @Expose()
  @IsString()
  createdAt: string;

  @Expose()
  @IsString()
  updatedAt: string;

  @Expose()
  @IsString()
  @Length(1, 250)
  name: string;

  @Expose()
  @IsUrl()
  link: string;

  @Expose()
  @IsUrl()
  image: string;

  @Expose()
  @IsNumber()
  price: number;

  @Expose()
  @IsNumber()
  raised: number;

  @Expose()
  @IsInt()
  copied: number;

  @Expose()
  @IsString()
  description: string;
}
