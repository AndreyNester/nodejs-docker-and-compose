import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../hash/hash.service';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne({
      where: { username },
    });
    const isPasswordCorrect: boolean = await this.hashService.compare(
      password,
      user.password,
    );
    if (isPasswordCorrect) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: Omit<User, 'password'>) {
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(data: CreateUserDto): Promise<Omit<User, 'password'>> {
    const hashedPassword = await this.hashService.hash(data.password, 10);
    const { password: _, ...createdUser } = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });
    return createdUser;
  }
}
