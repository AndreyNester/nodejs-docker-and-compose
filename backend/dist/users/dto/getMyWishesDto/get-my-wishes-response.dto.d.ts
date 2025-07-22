import { GetMyWishesOfferResponseDto } from './get-my-wishes-offer-response.dto';
export declare class GetMyWishesResponseDto {
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
    offers: GetMyWishesOfferResponseDto[];
}
