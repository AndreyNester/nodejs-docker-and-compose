import { Expose, Type } from 'class-transformer';
import { GetMyWishesOfferuserWishlistItemResponseDto } from './get-my-wishes-offer-user-wishlist-item-response.dto';
import { UserPublicProfileResponseDto } from '../user-public-profile-response.dto';

export class GetMyWishesOfferuserWishlistResponseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  name: string;

  @Expose()
  image: string;

  @Expose()
  @Type(() => UserPublicProfileResponseDto)
  owner: UserPublicProfileResponseDto;

  @Expose()
  @Type(() => GetMyWishesOfferuserWishlistItemResponseDto)
  items: GetMyWishesOfferuserWishlistItemResponseDto[];
}
