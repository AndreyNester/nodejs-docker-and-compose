import { Expose, Type } from 'class-transformer';
import { GetMyWishesOfferUserResponseDto } from './get-my-wishes-offer-user-response.dto';

export class GetMyWishesOfferResponseDto {
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
  @Type(() => GetMyWishesOfferUserResponseDto)
  user: GetMyWishesOfferUserResponseDto;
}
