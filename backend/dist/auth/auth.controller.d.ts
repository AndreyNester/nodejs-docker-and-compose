import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { IRequestWithIser } from './types/signin.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: CreateUserDto): Promise<Omit<import("../users/user.entity").User, "password">>;
    signin(req: IRequestWithIser): {
        access_token: string;
    };
}
