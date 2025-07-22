import { CreateWishDto } from './dto/create-wish.dto';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { WishesService } from './wishes.service';
import { WishResponseDto } from './dto/wish-response.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    createWish(dto: CreateWishDto, req: IRequestWithIser): Promise<WishResponseDto>;
    getLastWishes(): Promise<WishResponseDto[]>;
    GetTopWishes(): Promise<WishResponseDto[]>;
    findOneById(id: number): Promise<WishResponseDto>;
    updateWish(id: number, dto: UpdateWishDto, req: IRequestWithIser): Promise<WishResponseDto>;
    deleteWish(id: number, req: IRequestWithIser): Promise<WishResponseDto>;
    copyWish(req: IRequestWithIser, wishId: number): Promise<any>;
}
