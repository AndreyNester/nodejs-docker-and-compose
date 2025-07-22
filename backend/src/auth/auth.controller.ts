import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { IRequestWithIser } from './types/signin.interface';
import { PostgresErrorCode } from 'src/config/postgresError';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    try {
      return await this.authService.signup(body);
    } catch (error) {
      if (error.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('Email уже существует', HttpStatus.CONFLICT);
      }

      throw new HttpException(
        'Внутренняя ошибка сервера',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signin(@Request() req: IRequestWithIser) {
    return this.authService.login(req.user);
  }
}
