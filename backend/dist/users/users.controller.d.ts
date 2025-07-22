import { UsersService } from './users.service';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { GetMyProfileInfoResponseDto } from './dto/getMyProfileInfoDto/get-my-profile-info-response.dto';
import { UpdateMyProfileInfoRequestDto } from './dto/updateMyProfileInfoDto/update-my-profile-info-request.dto';
import { UpdateMyProfileInfoResponseDto } from './dto/updateMyProfileInfoDto/update-my-profile-info-response.dto';
import { GetUsersInfoResponseDto } from './dto/getUsersInfoDto/get-users-info-response.dto';
import { GetUsersInfoRequestDto } from './dto/getUsersInfoDto/get-users-info-request.dto';
import { GetMyWishesResponseDto } from './dto/getMyWishesDto/get-my-wishes-response.dto';
import { GetUserInfoByUsernameResponse } from './dto/getUserInfoByUsername/get-users-info-by-username-response.dto';
import { GetUserWishesResponseDto } from './dto/getUserWishesDto/get-user-wishes-response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(req: IRequestWithIser): Promise<GetMyProfileInfoResponseDto>;
    update(req: IRequestWithIser, body: UpdateMyProfileInfoRequestDto): Promise<UpdateMyProfileInfoResponseDto>;
    findMany(dto: GetUsersInfoRequestDto): Promise<GetUsersInfoResponseDto[]>;
    getMyWishes(req: IRequestWithIser): Promise<GetMyWishesResponseDto>;
    getUserWishes(username: string): Promise<GetUserWishesResponseDto>;
    findUserByUsername(username: string): Promise<GetUserInfoByUsernameResponse>;
}
