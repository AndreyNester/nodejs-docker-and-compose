import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY',
    });
  }

  validate(
    payload: Pick<User, 'id' | 'username' | 'email'>,
  ): Pick<User, 'id' | 'username' | 'email'> {
    return { ...payload };
  }
}
