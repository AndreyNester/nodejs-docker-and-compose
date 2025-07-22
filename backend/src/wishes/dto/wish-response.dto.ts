import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { OfferResponseDto } from 'src/offers/dto/offer-response.dto';
import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';

export class WishResponseDto {
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

  @Expose()
  @Type(() => UserPublicProfileResponseDto)
  owner: UserPublicProfileResponseDto;

  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OfferResponseDto)
  offers: OfferResponseDto[];
}
