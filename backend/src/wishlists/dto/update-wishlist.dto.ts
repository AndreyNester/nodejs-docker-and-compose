import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class UpdateWishlistDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  itemsId?: number[];

  @IsString()
  @Length(1)
  @IsOptional()
  description?: string;
}
