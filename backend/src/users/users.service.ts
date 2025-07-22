import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HashService } from 'src/hash/hash.service';
import { Wish } from 'src/wishes/wish.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly hashService: HashService,
  ) {}

  // CRUD
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async findOne(findOptions: FindOneOptions<User>): Promise<User> {
    const user = await this.usersRepository.findOne(findOptions);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async findAll(findOptions: FindOneOptions<User>): Promise<User[]> {
    return this.usersRepository.find(findOptions);
  }

  async updateOne(
    findOptions: FindOneOptions<User>,
    dto: UpdateUserDto,
  ): Promise<User> {
    const foundUser = await this.usersRepository.findOne(findOptions);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    Object.assign(foundUser, dto);
    if (dto.password) {
      foundUser.password = await this.hashService.hash(dto.password, 10);
    }
    return this.usersRepository.save(foundUser);
  }

  async removeOne(findOptions: FindOneOptions<User>): Promise<void> {
    const targetUser = await this.usersRepository.findOne(findOptions);
    if (!targetUser) {
      throw new NotFoundException('User nor found');
    }
    await this.usersRepository.remove(targetUser);
  }
  // -----------------------------------------------------------

  async getUserWishes(userId: number): Promise<Wish[]> {
    const fullInfoAboudUser = await this.findOne({
      where: {
        id: userId,
      },
      relations: [
        'wishes',
        'wishes.owner',
        'wishes.offers',
        'wishes.offers.user',
        'wishes.offers.user.wishes',
        'wishes.offers.user.offers',
        'wishes.offers.user.wishlists',
        'wishes.offers.user.wishlists.items',
        'wishes.offers.user.wishlists.owner',
      ],
    });
    return fullInfoAboudUser.wishes;
  }
}
