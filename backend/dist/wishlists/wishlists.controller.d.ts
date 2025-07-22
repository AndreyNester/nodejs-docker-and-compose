import { CreateWishlistDto } from './dto/create.wishlist.dto';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { WishlistResponseDto } from './dto/wishlist-response.dto';
import { WishlistsService } from './wishlists.service';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
export declare class WishlistsController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistsService);
    create(dto: CreateWishlistDto, req: IRequestWithIser): Promise<WishlistResponseDto>;
    findAll(): Promise<WishlistResponseDto[]>;
    findById(id: number): Promise<WishlistResponseDto>;
    updateWishlist(id: number, dto: UpdateWishlistDto, req: IRequestWithIser): Promise<WishlistResponseDto>;
    remove(id: number, req: IRequestWithIser): Promise<WishlistResponseDto>;
}
