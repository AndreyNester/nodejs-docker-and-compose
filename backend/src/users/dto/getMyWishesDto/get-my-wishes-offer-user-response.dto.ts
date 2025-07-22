import { Expose, Type } from 'class-transformer';
import { GetMyWishesOfferuserWishlistResponseDto } from './get-my-wishes-offer-user-wishlist-response.dto';

export class GetMyWishesOfferUserResponseDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  about: string;

  @Expose()
  avatar: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  wishes: string[];

  @Expose()
  offers: string[];

  @Expose()
  @Type(() => GetMyWishesOfferuserWishlistResponseDto)
  wishlists: GetMyWishesOfferuserWishlistResponseDto[];
}
