import { GetUserWishesOfferuserWishlistResponseDto } from './get-user-wishes-offer-user-wishlist-response.dto';
export declare class GetUserWishesOfferUserResponseDto {
    id: number;
    username: string;
    about: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    wishes: string[];
    offers: string[];
    wishlists: GetUserWishesOfferuserWishlistResponseDto[];
}
