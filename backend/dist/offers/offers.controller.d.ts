import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferResponseDto } from './dto/offer-response.dto';
export declare class OffersController {
    private readonly offerService;
    constructor(offerService: OffersService);
    create(req: IRequestWithIser, dto: CreateOfferDto): Promise<OfferResponseDto>;
    getMyOffers(req: IRequestWithIser): Promise<OfferResponseDto[]>;
    getOfferById(id: number, req: IRequestWithIser): Promise<OfferResponseDto>;
}
