import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Wish } from './wishes/wish.entity';
import { Wishlist } from './wishlists/wishlist.entity';
import { Offer } from './offers/offer.entity';
import { HashModule } from './hash/hash.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // делает модуль доступным во всем приложении
      envFilePath: '../.env', // можно указать путь к другому файлу
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: 5432,
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User, Wish, Wishlist, Offer],
        synchronize: true,
      }),
    }),
    WishesModule,
    WishlistsModule,
    OffersModule,
    UsersModule,
    HashModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);
  constructor(private dataSource: DataSource) {}
  onModuleInit() {
    if (this.dataSource.isInitialized) {
      this.logger.log('✅ Успешно подключено к базе данных');
    } else {
      this.logger.error('❌ Не удалось подключиться к базе данных');
    }
  }
}
