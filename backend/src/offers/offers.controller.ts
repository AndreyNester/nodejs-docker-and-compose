import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferResponseDto } from './dto/offer-response.dto';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@UseGuards(AuthGuard('jwt'))
@Controller('offers')
export class OffersController {
  constructor(private readonly offerService: OffersService) {}

  @Post()
  async create(
    @Request() req: IRequestWithIser,
    @Body() dto: CreateOfferDto,
  ): Promise<OfferResponseDto> {
    const rawOffer = await this.offerService.createOfferWithCheck(
      dto,
      req.user.id,
    );
    const plain = instanceToPlain(rawOffer);
    return plainToInstance(OfferResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async getMyOffers(
    @Request() req: IRequestWithIser,
  ): Promise<OfferResponseDto[]> {
    const offers = await this.offerService.findAll({
      where: {
        user: { id: req.user.id },
      },
      relations: ['user', 'item'],
    });
    return plainToInstance(OfferResponseDto, offers, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async getOfferById(
    @Param('id') id: number,
    @Request() req: IRequestWithIser,
  ): Promise<OfferResponseDto> {
    const offer = await this.offerService.findOne({
      where: {
        user: {
          id: req.user.id,
        },
      },
      relations: ['user', 'item'],
    });

    return plainToInstance(OfferResponseDto, offer, {
      excludeExtraneousValues: true,
    });
  }
}
