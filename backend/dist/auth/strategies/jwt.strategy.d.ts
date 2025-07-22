import { Strategy } from 'passport-jwt';
import { User } from 'src/users/user.entity';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: Pick<User, 'id' | 'username' | 'email'>): Pick<User, 'id' | 'username' | 'email'>;
}
export {};
