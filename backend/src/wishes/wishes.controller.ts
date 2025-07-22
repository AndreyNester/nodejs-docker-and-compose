import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateWishDto } from './dto/create-wish.dto';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { WishesService } from './wishes.service';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { WishResponseDto } from './dto/wish-response.dto';
import { Wish } from './wish.entity';
import { UpdateWishDto } from './dto/update-wish.dto';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createWish(
    @Body() dto: CreateWishDto,
    @Request() req: IRequestWithIser,
  ): Promise<WishResponseDto> {
    const rawResult = await this.wishesService.create(dto, req.user.id);
    return plainToInstance<WishResponseDto, Wish>(WishResponseDto, rawResult, {
      excludeExtraneousValues: true,
    });
  }

  @Get('last')
  async getLastWishes(): Promise<WishResponseDto[]> {
    const rawResult = await this.wishesService.getLastWishes(15);
    return plainToInstance<WishResponseDto, Wish>(WishResponseDto, rawResult, {
      excludeExtraneousValues: true,
    });
  }

  @Get('top')
  async GetTopWishes(): Promise<WishResponseDto[]> {
    const rawResult = await this.wishesService.getTopWishes(15);
    return plainToInstance<WishResponseDto, Wish>(WishResponseDto, rawResult, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOneById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WishResponseDto> {
    const rawWish: Wish = await this.wishesService.findOne({
      where: {
        id,
      },
      relations: ['owner', 'offers', 'offers.user'],
    });
    const plain = instanceToPlain(rawWish);
    return plainToInstance(WishResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async updateWish(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWishDto,
    @Request() req: IRequestWithIser,
  ): Promise<WishResponseDto> {
    const updatedWish = await this.wishesService.updateWishWithCheck(
      req.user.id,
      id,
      dto,
    );

    const plain = instanceToPlain(updatedWish);
    return plainToInstance(WishResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteWish(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: IRequestWithIser,
  ): Promise<WishResponseDto> {
    const rawWish = await this.wishesService.deleteWishWithCheck(
      req.user.id,
      id,
    );
    const plain = instanceToPlain(rawWish);
    return plainToInstance(WishResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/copy')
  async copyWish(
    @Request() req: IRequestWithIser,
    @Param('id', ParseIntPipe) wishId: number,
  ): Promise<any> {
    const rawResult = await this.wishesService.copyWish(req.user.id, wishId);
    return plainToInstance<WishResponseDto, Wish>(WishResponseDto, rawResult, {
      excludeExtraneousValues: true,
    });
  }
}
