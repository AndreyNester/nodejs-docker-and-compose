import { Offer } from './offer.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { WishesService } from 'src/wishes/wishes.service';
export declare class OffersService {
    private readonly offerRepository;
    private readonly wishesService;
    constructor(offerRepository: Repository<Offer>, wishesService: WishesService);
    create(createOfferDto: CreateOfferDto): Promise<Offer>;
    findOne(findOptions: FindManyOptions<Offer>): Promise<Offer>;
    findAll(findOptions: FindManyOptions<Offer>): Promise<Offer[]>;
    update(findOptions: FindManyOptions<Offer>, updateOfferDto: UpdateOfferDto): Promise<Offer>;
    remove(findOptions: FindManyOptions<Offer>): Promise<void>;
    createOfferWithCheck(dto: CreateOfferDto, userId: number): Promise<Offer>;
}
