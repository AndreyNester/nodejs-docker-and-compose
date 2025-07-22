import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { IRequestWithIser } from 'src/auth/types/signin.interface';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { ILike } from 'typeorm';
import { GetMyProfileInfoResponseDto } from './dto/getMyProfileInfoDto/get-my-profile-info-response.dto';
import { UpdateMyProfileInfoRequestDto } from './dto/updateMyProfileInfoDto/update-my-profile-info-request.dto';
import { UpdateMyProfileInfoResponseDto } from './dto/updateMyProfileInfoDto/update-my-profile-info-response.dto';
import { GetUsersInfoResponseDto } from './dto/getUsersInfoDto/get-users-info-response.dto';
import { GetUsersInfoRequestDto } from './dto/getUsersInfoDto/get-users-info-request.dto';
import { GetMyWishesResponseDto } from './dto/getMyWishesDto/get-my-wishes-response.dto';
import { GetUserInfoByUsernameResponse } from './dto/getUserInfoByUsername/get-users-info-by-username-response.dto';
import { GetUserWishesResponseDto } from './dto/getUserWishesDto/get-user-wishes-response.dto';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async findOne(
    @Request() req: IRequestWithIser,
  ): Promise<GetMyProfileInfoResponseDto> {
    const foundUser = await this.usersService.findOne({
      where: { id: req.user.id },
    });
    return plainToInstance<GetMyProfileInfoResponseDto, User>(
      GetMyProfileInfoResponseDto,
      foundUser,
      {
        excludeExtraneousValues: true,
      },
    );
  }

  @Patch('me')
  async update(
    @Request() req: IRequestWithIser,
    @Body() body: UpdateMyProfileInfoRequestDto,
  ): Promise<UpdateMyProfileInfoResponseDto> {
    const updatedUser = await this.usersService.updateOne(
      {
        where: { id: req.user.id },
      },
      body,
    );
    return plainToInstance<UpdateMyProfileInfoResponseDto, User>(
      UpdateMyProfileInfoResponseDto,
      updatedUser,
      {
        excludeExtraneousValues: true,
      },
    );
  }

  @Post('find')
  @HttpCode(HttpStatus.OK)
  async findMany(
    @Body() dto: GetUsersInfoRequestDto,
  ): Promise<GetUsersInfoResponseDto[]> {
    const rawList = await this.usersService.findAll({
      where: [
        { username: ILike(`%${dto.query}%`) },
        { email: ILike(`%${dto.query}%`) },
      ],
    });

    const preparedResults: GetUsersInfoResponseDto[] =
      rawList.map<GetUsersInfoResponseDto>((user) =>
        plainToInstance<GetUsersInfoResponseDto, User>(
          GetUsersInfoResponseDto,
          user,
          {
            excludeExtraneousValues: true,
          },
        ),
      );
    return preparedResults;
  }

  @Get('me/wishes')
  async getMyWishes(
    @Request() req: IRequestWithIser,
  ): Promise<GetMyWishesResponseDto> {
    const wishes = await this.usersService.getUserWishes(req.user.id);
    const plaiin = instanceToPlain(wishes);
    return plainToInstance(GetMyWishesResponseDto, plaiin, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':username/wishes')
  async getUserWishes(
    @Param('username') username: string,
  ): Promise<GetUserWishesResponseDto> {
    const { id } = await this.usersService.findOne({
      where: {
        username,
      },
    });
    const userWishes = await this.usersService.getUserWishes(id);
    const plaiin = instanceToPlain(userWishes);
    return plainToInstance(GetUserWishesResponseDto, plaiin, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':username')
  async findUserByUsername(
    @Param('username') username: string,
  ): Promise<GetUserInfoByUsernameResponse> {
    const foundUser = await this.usersService.findOne({
      where: {
        username,
      },
    });
    const plain = instanceToPlain(foundUser);
    return plainToInstance(GetUserInfoByUsernameResponse, plain, {
      excludeExtraneousValues: true,
    });
  }
}
