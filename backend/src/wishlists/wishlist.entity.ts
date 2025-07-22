import { BaseEntity } from 'src/config/BaseEntity';
import { User } from 'src/users/user.entity';
import { Wish } from 'src/wishes/wish.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Wishlist extends BaseEntity {
  @Column({ length: 250 })
  name: string;

  @Column({ length: 1_500, default: 'Ничего не смог придумать' })
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.wishlists)
  owner: User;

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[];
}
