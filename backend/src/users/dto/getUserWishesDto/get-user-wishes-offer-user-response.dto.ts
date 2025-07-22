import { Expose, Type } from 'class-transformer';
import { GetUserWishesOfferuserWishlistResponseDto } from './get-user-wishes-offer-user-wishlist-response.dto';

export class GetUserWishesOfferUserResponseDto {
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
  @Type(() => GetUserWishesOfferuserWishlistResponseDto)
  wishlists: GetUserWishesOfferuserWishlistResponseDto[];
}
