import { BaseEntity } from 'src/config/BaseEntity';
import { User } from 'src/users/user.entity';
import { Wish } from 'src/wishes/wish.entity';
export declare class Offer extends BaseEntity {
    amount: number;
    hidden: boolean;
    user: User;
    item: Wish;
}
