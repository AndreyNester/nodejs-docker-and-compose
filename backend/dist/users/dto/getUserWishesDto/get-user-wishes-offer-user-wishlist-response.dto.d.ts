import { GetUserWishesOfferuserWishlistItemResponseDto } from './get-user-wishes-offer-user-wishlist-item-response.dto';
import { UserPublicProfileResponseDto } from '../user-public-profile-response.dto';
export declare class GetUserWishesOfferuserWishlistResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    owner: UserPublicProfileResponseDto;
    items: GetUserWishesOfferuserWishlistItemResponseDto[];
}
