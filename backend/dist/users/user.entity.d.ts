import { BaseEntity } from 'src/config/BaseEntity';
import { Offer } from 'src/offers/offer.entity';
import { Wish } from 'src/wishes/wish.entity';
import { Wishlist } from 'src/wishlists/wishlist.entity';
export declare class User extends BaseEntity {
    username: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
    wishes: Wish[];
    offers: Offer[];
    wishlists: Wishlist[];
}
