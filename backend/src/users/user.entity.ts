import { BaseEntity } from 'src/config/BaseEntity';
import { Offer } from 'src/offers/offer.entity';
import { Wish } from 'src/wishes/wish.entity';
import { Wishlist } from 'src/wishlists/wishlist.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true, length: 30 })
  username: string;

  @Column({ length: 200, default: 'Пока ничего не рассказал о себе' })
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wwish) => wwish.owner)
  wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  wishlists: Wishlist[];
}
