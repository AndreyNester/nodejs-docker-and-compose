import { GetUserWishesOfferResponseDto } from './get-user-wishes-offer-response.dto';
export declare class GetUserWishesResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    copied: number;
    description: string;
    offers: GetUserWishesOfferResponseDto[];
}
