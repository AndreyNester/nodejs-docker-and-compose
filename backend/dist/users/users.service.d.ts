import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HashService } from 'src/hash/hash.service';
import { Wish } from 'src/wishes/wish.entity';
export declare class UsersService {
    private readonly usersRepository;
    private readonly hashService;
    constructor(usersRepository: Repository<User>, hashService: HashService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(findOptions: FindOneOptions<User>): Promise<User>;
    findAll(findOptions: FindOneOptions<User>): Promise<User[]>;
    updateOne(findOptions: FindOneOptions<User>, dto: UpdateUserDto): Promise<User>;
    removeOne(findOptions: FindOneOptions<User>): Promise<void>;
    getUserWishes(userId: number): Promise<Wish[]>;
}
