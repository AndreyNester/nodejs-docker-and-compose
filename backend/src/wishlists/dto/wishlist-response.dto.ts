import { Expose, Type } from 'class-transformer';
import { IsInt, IsString, IsUrl, ValidateNested } from 'class-validator';
import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';
import { WishPartialDto } from 'src/wishes/dto/wish-partial.dto';

export class WishlistResponseDto {
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
  image: string;

  @Expose()
  @ValidateNested()
  @Type(() => UserPublicProfileResponseDto)
  owner: UserPublicProfileResponseDto;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => WishPartialDto)
  items: WishPartialDto[];
}
