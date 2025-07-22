import { OfferResponseDto } from 'src/offers/dto/offer-response.dto';
import { UserPublicProfileResponseDto } from 'src/users/dto/user-public-profile-response.dto';
export declare class WishResponseDto {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    copied: number;
    description: string;
    owner: UserPublicProfileResponseDto;
    offers: OfferResponseDto[];
}
