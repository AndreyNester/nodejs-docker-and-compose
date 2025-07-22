import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  itemsId: number[];

  @IsString()
  @Length(1)
  @IsOptional()
  description?: string;
}
