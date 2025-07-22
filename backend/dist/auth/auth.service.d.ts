import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../hash/hash.service';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private hashService;
    constructor(usersService: UsersService, jwtService: JwtService, hashService: HashService);
    validateUser(username: string, password: string): Promise<Omit<User, 'password'> | null>;
    login(user: Omit<User, 'password'>): {
        access_token: string;
    };
    signup(data: CreateUserDto): Promise<Omit<User, 'password'>>;
}
