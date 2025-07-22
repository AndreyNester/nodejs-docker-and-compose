import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlist } from './wishlist.entity';
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  In,
  Repository,
} from 'typeorm';
import { CreateWishlistDto } from './dto/create.wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { UsersService } from 'src/users/users.service';
import { WishesService } from 'src/wishes/wishes.service';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishListRepository: Repository<Wishlist>,
    private readonly usersService: UsersService,
    private readonly wishesService: WishesService,
  ) {}

  async create(createWishListDto: Partial<Wishlist>): Promise<Wishlist> {
    const preCreatedWishList =
      this.wishListRepository.create(createWishListDto);
    return this.wishListRepository.save(preCreatedWishList);
  }

  async findOne(findOptions: FindOneOptions<Wishlist>): Promise<Wishlist> {
    const targetWishlist = await this.wishListRepository.findOne(findOptions);
    if (!targetWishlist) {
      throw new NotFoundException('Wishlist not found');
    }
    return targetWishlist;
  }

  async findAll(findOptions: FindManyOptions<Wishlist>): Promise<Wishlist[]> {
    return this.wishListRepository.find(findOptions);
  }

  async update(
    where: FindOptionsWhere<Wishlist>,
    updateWishListDto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    const targetWishList = await this.wishListRepository.findOne({ where });
    if (!targetWishList) {
      throw new NotFoundException('WishList not found');
    }
    const updatedWishList = Object.assign(
      {},
      targetWishList,
      updateWishListDto,
    );
    return this.wishListRepository.save(updatedWishList);
  }

  async removeOne(where: FindOptionsWhere<Wishlist>): Promise<void> {
    const targetWishlist = await this.wishListRepository.findOne({ where });
    if (!targetWishlist) {
      throw new NotFoundException('Wishlist not found');
    }
    await this.wishListRepository.remove(targetWishlist);
  }

  // ---------------------------------------------------------------

  async createWithUser(
    dto: CreateWishlistDto,
    userId: number,
  ): Promise<Wishlist> {
    const owner = await this.usersService.findOne({
      where: { id: userId },
    });

    const items = await this.wishesService.findAll({
      where: {
        id: In(dto.itemsId),
      },
    });

    if (items.length !== dto.itemsId.length) {
      throw new BadRequestException('Некоторые подарки не найдены');
    }

    return this.create({
      ...dto,
      owner,
      items,
    });
  }

  async updateWithUserCheck(
    wishlistId: number,
    userId: number,
    dto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    const wishlist = await this.findOne({
      where: { id: wishlistId },
      relations: ['owner', 'items'],
    });

    if (wishlist.owner.id !== userId) {
      throw new ForbiddenException('Вы не можете редактировать чужой вишлист');
    }

    if (dto.itemsId) {
      const items = await this.wishesService.findAll({
        where: { id: In(dto.itemsId) },
      });

      if (items.length !== dto.itemsId.length) {
        throw new BadRequestException('Некоторые подарки не найдены');
      }

      wishlist.items = items;
    }

    if (dto.name) wishlist.name = dto.name;
    if (dto.image) wishlist.image = dto.image;

    return this.wishListRepository.save(wishlist);
  }

  async removeWithCheck(userId: number, wishlistId: number): Promise<Wishlist> {
    const wishlist = await this.findOne({
      where: { id: wishlistId },
      relations: ['owner'],
    });

    if (wishlist.owner.id !== userId) {
      throw new ForbiddenException('Вы не можете удалить чужой вишлист');
    }

    return this.wishListRepository.remove(wishlist);
  }
}
