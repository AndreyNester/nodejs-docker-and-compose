import { Expose, Type } from 'class-transformer';
import { GetUserWishesOfferUserResponseDto } from './get-user-wishes-offer-user-response.dto';

export class GetUserWishesOfferResponseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  item: string;

  @Expose()
  amount: number;

  @Expose()
  hidden: boolean;

  @Expose()
  @Type(() => GetUserWishesOfferUserResponseDto)
  user: GetUserWishesOfferUserResponseDto;
}
