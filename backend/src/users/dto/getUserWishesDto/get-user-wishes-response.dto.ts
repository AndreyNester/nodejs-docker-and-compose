import { Expose, Type } from 'class-transformer';
import { GetUserWishesOfferResponseDto } from './get-user-wishes-offer-response.dto';

export class GetUserWishesResponseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  name: string;

  @Expose()
  link: string;

  @Expose()
  image: string;

  @Expose()
  price: number;

  @Expose()
  raised: number;

  @Expose()
  copied: number;

  @Expose()
  description: string;

  @Expose()
  @Type(() => GetUserWishesOfferResponseDto)
  offers: GetUserWishesOfferResponseDto[];
}
