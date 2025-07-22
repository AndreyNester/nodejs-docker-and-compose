import { CreateWishDto } from './dto/create-wish.dto';
import { Wish } from './wish.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateWishDto } from './dto/update-wish.dto';
import { UsersService } from 'src/users/users.service';
export declare class WishesService {
    private readonly wishRepository;
    private readonly userService;
    constructor(wishRepository: Repository<Wish>, userService: UsersService);
    create(createWishDto: CreateWishDto, userId: number): Promise<Wish>;
    findOne(findOptions: FindOneOptions<Wish>): Promise<Wish>;
    findAll(findOptions: FindOneOptions<Wish>): Promise<Wish[]>;
    updateOne(findOptions: FindOneOptions<Wish>, updateWishDto: Partial<Wish>): Promise<Wish>;
    removeOne(findOptions: FindOneOptions<Wish>): Promise<void>;
    updateWishWithCheck(userId: number, wishId: number, dto: UpdateWishDto): Promise<Wish>;
    deleteWishWithCheck(userId: number, wishId: number): Promise<Wish>;
    getLastWishes(amount: number): Promise<Wish[]>;
    getTopWishes(amount: number): Promise<Wish[]>;
    copyWish(newOwnerId: number, originalWishId: number): Promise<Wish>;
}
