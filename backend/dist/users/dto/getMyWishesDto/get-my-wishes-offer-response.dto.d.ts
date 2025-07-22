import { GetMyWishesOfferUserResponseDto } from './get-my-wishes-offer-user-response.dto';
export declare class GetMyWishesOfferResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    item: string;
    amount: number;
    hidden: boolean;
    user: GetMyWishesOfferUserResponseDto;
}
