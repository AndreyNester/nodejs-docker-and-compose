import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';
import { WishPartialDto } from 'src/wishes/dto/wish-partial.dto';
export declare class WishlistResponseDto {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    owner: UserPublicProfileResponseDto;
    items: WishPartialDto[];
}
