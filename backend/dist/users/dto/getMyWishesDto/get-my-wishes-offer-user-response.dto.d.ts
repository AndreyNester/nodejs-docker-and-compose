import { GetMyWishesOfferuserWishlistResponseDto } from './get-my-wishes-offer-user-wishlist-response.dto';
export declare class GetMyWishesOfferUserResponseDto {
    id: number;
    username: string;
    about: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    wishes: string[];
    offers: string[];
    wishlists: GetMyWishesOfferuserWishlistResponseDto[];
}
