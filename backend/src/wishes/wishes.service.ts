import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { Wish } from './wish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateWishDto } from './dto/update-wish.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private readonly wishRepository: Repository<Wish>,
    private readonly userService: UsersService,
  ) {}
  // CRUD

  async create(createWishDto: CreateWishDto, userId: number): Promise<Wish> {
    const owner = await this.userService.findOne({
      where: { id: userId },
    });
    const preCreatedWish = this.wishRepository.create({
      ...createWishDto,
      owner,
    });
    return this.wishRepository.save(preCreatedWish);
  }

  async findOne(findOptions: FindOneOptions<Wish>): Promise<Wish> {
    const foundWish = await this.wishRepository.findOne(findOptions);
    if (!foundWish) {
      throw new NotFoundException('Подарок не найден');
    }
    return foundWish;
  }

  async findAll(findOptions: FindOneOptions<Wish>): Promise<Wish[]> {
    return this.wishRepository.find(findOptions);
  }

  async updateOne(
    findOptions: FindOneOptions<Wish>,
    updateWishDto: Partial<Wish>,
  ): Promise<Wish> {
    const wishFromDb = await this.wishRepository.findOne(findOptions);
    if (!wishFromDb) {
      throw new NotFoundException('Wish not found');
    }
    const updatedWish = Object.assign(wishFromDb, updateWishDto);
    return this.wishRepository.save(updatedWish);
  }

  async removeOne(findOptions: FindOneOptions<Wish>): Promise<void> {
    const targetWish = await this.wishRepository.findOne(findOptions);
    if (!targetWish) {
      throw new NotFoundException('Wish not found');
    }
    await this.wishRepository.remove(targetWish);
  }
  // -----------------------------------------------------

  async updateWishWithCheck(
    userId: number,
    wishId: number,
    dto: UpdateWishDto,
  ): Promise<Wish> {
    const wish = await this.findOne({
      where: { id: wishId },
      relations: ['owner', 'offers'],
    });

    if (!wish) throw new NotFoundException('Подарок не найден');

    if (wish.owner.id !== userId) {
      throw new ForbiddenException('Нельзя редактировать чужой подарок');
    }

    if (
      dto.price !== undefined &&
      dto.price !== wish.price &&
      wish.offers.length > 0
    ) {
      throw new BadRequestException(
        'Нельзя изменить цену, если есть скидывающиеся пользователи',
      );
    }

    Object.assign(wish, dto);

    return this.wishRepository.save(wish);
  }

  async deleteWishWithCheck(userId: number, wishId: number): Promise<Wish> {
    const wishFromDb = await this.wishRepository.findOne({
      where: {
        id: wishId,
      },
      relations: ['owner', 'offers'],
    });
    if (!wishFromDb) {
      throw new NotFoundException('Такого подарке не существует');
    }

    if (wishFromDb.owner.id !== userId) {
      throw new ForbiddenException('Нельзя удалять не свой подарок');
    }

    if (wishFromDb.offers.length > 0) {
      throw new BadRequestException(
        'Нельзя удалить подарок у которого уже есть жалеющие скинуться',
      );
    }
    return this.wishRepository.remove(wishFromDb);
  }

  async getLastWishes(amount: number): Promise<Wish[]> {
    return this.wishRepository.find({
      take: amount,
      order: {
        createdAt: 'DESC',
      },
      relations: [
        'owner',
        'offers',
        'offers.user',
        'offers.user.wishlists',
        'offers.user.wishlists.owner',
        'offers.user.wishlists.items',
      ],
    });
  }

  async getTopWishes(amount: number): Promise<Wish[]> {
    return this.wishRepository.find({
      take: amount,
      order: {
        copied: 'DESC',
      },
      relations: [
        'owner',
        'offers',
        'offers.user',
        'offers.user.wishlists',
        'offers.user.wishlists.owner',
        'offers.user.wishlists.items',
      ],
    });
  }

  async copyWish(newOwnerId: number, originalWishId: number): Promise<Wish> {
    const originalWish = await this.findOne({
      where: { id: originalWishId },
    });

    originalWish.copied += 1;
    await this.wishRepository.save(originalWish);

    const newOwner = await this.userService.findOne({
      where: {
        id: newOwnerId,
      },
    });

    const copiedWish = this.wishRepository.create({
      name: originalWish.name,
      description: originalWish.description,
      image: originalWish.image,
      link: originalWish.link,
      price: originalWish.price,
      raised: 0,
      owner: newOwner,
    });

    return this.wishRepository.save(copiedWish);
  }
}
