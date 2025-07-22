import { Expose, Type } from 'class-transformer';
import { GetMyWishesOfferResponseDto } from './get-my-wishes-offer-response.dto';

export class GetMyWishesResponseDto {
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
  @Type(() => GetMyWishesOfferResponseDto)
  offers: GetMyWishesOfferResponseDto[];
}
