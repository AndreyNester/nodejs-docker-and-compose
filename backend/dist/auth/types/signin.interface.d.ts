import { Request } from 'express';
import { User } from 'src/users/user.entity';
export interface IRequestWithIser extends Request {
    user: Omit<User, 'password'>;
}
