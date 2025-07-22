import { BaseEntity } from 'src/config/BaseEntity';
import { User } from 'src/users/user.entity';
import { Wish } from 'src/wishes/wish.entity';
export declare class Wishlist extends BaseEntity {
    name: string;
    description: string;
    image: string;
    owner: User;
    items: Wish[];
}
