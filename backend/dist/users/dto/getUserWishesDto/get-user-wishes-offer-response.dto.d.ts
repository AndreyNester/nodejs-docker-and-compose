import { GetUserWishesOfferUserResponseDto } from './get-user-wishes-offer-user-response.dto';
export declare class GetUserWishesOfferResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    item: string;
    amount: number;
    hidden: boolean;
    user: GetUserWishesOfferUserResponseDto;
}
