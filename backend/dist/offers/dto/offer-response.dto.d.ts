import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';
import { WishResponseDto } from 'src/wishes/dto/wish-response.dto';
export declare class OfferResponseDto {
    id: number;
    createdAt: string;
    updatedAt: string;
    amount: number;
    hidden: boolean;
    user: UserPublicProfileResponseDto;
    item: WishResponseDto;
}
