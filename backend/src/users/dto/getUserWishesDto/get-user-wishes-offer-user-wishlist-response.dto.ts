import { Expose, Type } from 'class-transformer';
import { GetUserWishesOfferuserWishlistItemResponseDto } from './get-user-wishes-offer-user-wishlist-item-response.dto';
import { UserPublicProfileResponseDto } from '../user-public-profile-response.dto';

export class GetUserWishesOfferuserWishlistResponseDto {
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
  @Type(() => GetUserWishesOfferuserWishlistItemResponseDto)
  items: GetUserWishesOfferuserWishlistItemResponseDto[];
}
