import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HashModule } from 'src/hash/hash.module';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    HashModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
