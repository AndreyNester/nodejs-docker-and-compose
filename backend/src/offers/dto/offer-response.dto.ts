import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';
import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';
import { WishResponseDto } from 'src/wishes/dto/wish-response.dto';

export class OfferResponseDto {
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
  @IsNumber()
  amount: number;

  @Expose()
  @IsBoolean()
  hidden: boolean;

  @Expose()
  @Type(() => UserPublicProfileResponseDto)
  user: UserPublicProfileResponseDto;

  @Expose()
  @Type(() => WishResponseDto)
  item: WishResponseDto;
}
