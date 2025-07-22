import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { WishesService } from 'src/wishes/wishes.service';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
    private readonly wishesService: WishesService,
  ) {}

  // CRUD
  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const preCreatedOffer = this.offerRepository.create(createOfferDto);
    return this.offerRepository.save(preCreatedOffer);
  }

  async findOne(findOptions: FindManyOptions<Offer>): Promise<Offer> {
    const targetOfferr = await this.offerRepository.findOne(findOptions);
    if (!targetOfferr) {
      throw new NotFoundException('Offer not found');
    }
    return targetOfferr;
  }

  async findAll(findOptions: FindManyOptions<Offer>): Promise<Offer[]> {
    return this.offerRepository.find(findOptions);
  }

  async update(
    findOptions: FindManyOptions<Offer>,
    updateOfferDto: UpdateOfferDto,
  ): Promise<Offer> {
    const targetOffer = await this.offerRepository.findOne(findOptions);
    if (!targetOffer) {
      throw new NotFoundException('Offer not found');
    }
    const newOffer = Object.assign({}, targetOffer, updateOfferDto);
    return this.offerRepository.save(newOffer);
  }

  async remove(findOptions: FindManyOptions<Offer>): Promise<void> {
    const targetOffer = await this.offerRepository.findOne(findOptions);
    if (!targetOffer) {
      throw new NotFoundException('Offer not found');
    }
    await this.offerRepository.remove(targetOffer);
  }
  // ------------------------------------------------------

  async createOfferWithCheck(
    dto: CreateOfferDto,
    userId: number,
  ): Promise<Offer> {
    const wish = await this.wishesService.findOne({
      where: { id: dto.itemId },
      relations: ['owner', 'offers'],
    });

    if (wish.owner.id === userId) {
      throw new ForbiddenException('Нельзя скидываться на свой подарок');
    }

    const totalRaised = Number(wish.raised);
    const remaining = wish.price - totalRaised;

    if (dto.amount > remaining) {
      throw new BadRequestException(
        `Сумма превышает остаток: можно максимум ${remaining}`,
      );
    }

    const raised = totalRaised + dto.amount;
    await this.wishesService.updateOne(
      {
        where: {
          id: dto.itemId,
        },
      },
      {
        raised,
      },
    );

    const offer = this.offerRepository.create({
      amount: dto.amount,
      hidden: false,
      user: { id: userId },
      item: { id: dto.itemId },
    });

    return this.offerRepository.save(offer);
  }
}
