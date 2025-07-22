import {
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Min,
} from 'class-validator';

export class UpdateWishDto {
  @IsString()
  @Length(1, 250)
  @IsOptional()
  name?: string;

  @IsUrl()
  @IsOptional()
  link?: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
