import { BaseEntity } from 'src/config/BaseEntity';
import { Offer } from 'src/offers/offer.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Wish extends BaseEntity {
  @Column({ length: 250 })
  name: string;

  @Column()
  link: string;

  @Column()
  image: string;

  @Column('decimal', { scale: 2, precision: 10 })
  price: number;

  @Column('decimal', { scale: 2, precision: 10, default: 0 })
  raised: number;

  @Column({ length: 1024 })
  description: string;

  @Column({ type: 'int', default: 0 })
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];
}
