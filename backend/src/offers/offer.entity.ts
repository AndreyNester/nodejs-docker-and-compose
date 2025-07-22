import { BaseEntity } from 'src/config/BaseEntity';
import { User } from 'src/users/user.entity';
import { Wish } from 'src/wishes/wish.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Offer extends BaseEntity {
  @Column('decimal', {
    scale: 2,
    precision: 10,
  })
  amount: number;

  @Column()
  hidden: boolean;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;
}
