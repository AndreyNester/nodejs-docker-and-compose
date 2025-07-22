import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateWishlistDto } from './dto/create.wishlist.dto';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { WishlistResponseDto } from './dto/wishlist-response.dto';
import { WishlistsService } from './wishlists.service';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlists')
@UseGuards(AuthGuard('jwt'))
export class WishlistsController {
  constructor(private readonly wishlistService: WishlistsService) {}
  @Post()
  async create(
    @Body() dto: CreateWishlistDto,
    @Request() req: IRequestWithIser,
  ): Promise<WishlistResponseDto> {
    const rawWishList = await this.wishlistService.createWithUser(
      dto,
      req.user.id,
    );
    const wishList = instanceToPlain(rawWishList);
    return plainToInstance(WishlistResponseDto, wishList, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async findAll(): Promise<WishlistResponseDto[]> {
    const rawWishLists = await this.wishlistService.findAll({
      relations: ['owner', 'items'],
    });
    return plainToInstance(WishlistResponseDto, rawWishLists, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async findById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WishlistResponseDto> {
    const rawWishList = await this.wishlistService.findOne({
      where: {
        id,
      },
      relations: ['owner', 'items'],
    });
    // const plainWishlists = instanceToPlain(rawWishLists);
    return plainToInstance(WishlistResponseDto, rawWishList, {
      excludeExtraneousValues: true,
    });
  }

  @Patch(':id')
  async updateWishlist(
    @Param('id') id: number,
    @Body() dto: UpdateWishlistDto,
    @Request() req: IRequestWithIser,
  ): Promise<WishlistResponseDto> {
    const updated = await this.wishlistService.updateWithUserCheck(
      id,
      req.user.id,
      dto,
    );
    const plain = instanceToPlain(updated);
    return plainToInstance(WishlistResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: IRequestWithIser,
  ): Promise<WishlistResponseDto> {
    const removerWishlist = await this.wishlistService.removeWithCheck(
      req.user.id,
      id,
    );
    const plain = instanceToPlain(removerWishlist);
    return plainToInstance(WishlistResponseDto, plain, {
      excludeExtraneousValues: true,
    });
  }
}
