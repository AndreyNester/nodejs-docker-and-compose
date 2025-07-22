import { BaseEntity } from 'src/config/BaseEntity';
import { Offer } from 'src/offers/offer.entity';
import { User } from 'src/users/user.entity';
export declare class Wish extends BaseEntity {
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    description: string;
    copied: number;
    owner: User;
    offers: Offer[];
}
