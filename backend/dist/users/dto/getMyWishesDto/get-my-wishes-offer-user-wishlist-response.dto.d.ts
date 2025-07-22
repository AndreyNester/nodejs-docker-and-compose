import { GetMyWishesOfferuserWishlistItemResponseDto } from './get-my-wishes-offer-user-wishlist-item-response.dto';
import { UserPublicProfileResponseDto } from '../user-public-profile-response.dto';
export declare class GetMyWishesOfferuserWishlistResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    owner: UserPublicProfileResponseDto;
    items: GetMyWishesOfferuserWishlistItemResponseDto[];
}
