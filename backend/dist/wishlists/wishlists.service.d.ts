import { Wishlist } from './wishlist.entity';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create.wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { UsersService } from 'src/users/users.service';
import { WishesService } from 'src/wishes/wishes.service';
export declare class WishlistsService {
    private readonly wishListRepository;
    private readonly usersService;
    private readonly wishesService;
    constructor(wishListRepository: Repository<Wishlist>, usersService: UsersService, wishesService: WishesService);
    create(createWishListDto: Partial<Wishlist>): Promise<Wishlist>;
    findOne(findOptions: FindOneOptions<Wishlist>): Promise<Wishlist>;
    findAll(findOptions: FindManyOptions<Wishlist>): Promise<Wishlist[]>;
    update(where: FindOptionsWhere<Wishlist>, updateWishListDto: UpdateWishlistDto): Promise<Wishlist>;
    removeOne(where: FindOptionsWhere<Wishlist>): Promise<void>;
    createWithUser(dto: CreateWishlistDto, userId: number): Promise<Wishlist>;
    updateWithUserCheck(wishlistId: number, userId: number, dto: UpdateWishlistDto): Promise<Wishlist>;
    removeWithCheck(userId: number, wishlistId: number): Promise<Wishlist>;
}
