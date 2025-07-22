"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishlist_entity_1 = require("./wishlist.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const wishes_service_1 = require("../wishes/wishes.service");
let WishlistsService = class WishlistsService {
    constructor(wishListRepository, usersService, wishesService) {
        this.wishListRepository = wishListRepository;
        this.usersService = usersService;
        this.wishesService = wishesService;
    }
    async create(createWishListDto) {
        const preCreatedWishList = this.wishListRepository.create(createWishListDto);
        return this.wishListRepository.save(preCreatedWishList);
    }
    async findOne(findOptions) {
        const targetWishlist = await this.wishListRepository.findOne(findOptions);
        if (!targetWishlist) {
            throw new common_1.NotFoundException('Wishlist not found');
        }
        return targetWishlist;
    }
    async findAll(findOptions) {
        return this.wishListRepository.find(findOptions);
    }
    async update(where, updateWishListDto) {
        const targetWishList = await this.wishListRepository.findOne({ where });
        if (!targetWishList) {
            throw new common_1.NotFoundException('WishList not found');
        }
        const updatedWishList = Object.assign({}, targetWishList, updateWishListDto);
        return this.wishListRepository.save(updatedWishList);
    }
    async removeOne(where) {
        const targetWishlist = await this.wishListRepository.findOne({ where });
        if (!targetWishlist) {
            throw new common_1.NotFoundException('Wishlist not found');
        }
        await this.wishListRepository.remove(targetWishlist);
    }
    async createWithUser(dto, userId) {
        const owner = await this.usersService.findOne({
            where: { id: userId },
        });
        const items = await this.wishesService.findAll({
            where: {
                id: (0, typeorm_2.In)(dto.itemsId),
            },
        });
        if (items.length !== dto.itemsId.length) {
            throw new common_1.BadRequestException('Некоторые подарки не найдены');
        }
        return this.create(Object.assign(Object.assign({}, dto), { owner,
            items }));
    }
    async updateWithUserCheck(wishlistId, userId, dto) {
        const wishlist = await this.findOne({
            where: { id: wishlistId },
            relations: ['owner', 'items'],
        });
        if (wishlist.owner.id !== userId) {
            throw new common_1.ForbiddenException('Вы не можете редактировать чужой вишлист');
        }
        if (dto.itemsId) {
            const items = await this.wishesService.findAll({
                where: { id: (0, typeorm_2.In)(dto.itemsId) },
            });
            if (items.length !== dto.itemsId.length) {
                throw new common_1.BadRequestException('Некоторые подарки не найдены');
            }
            wishlist.items = items;
        }
        if (dto.name)
            wishlist.name = dto.name;
        if (dto.image)
            wishlist.image = dto.image;
        return this.wishListRepository.save(wishlist);
    }
    async removeWithCheck(userId, wishlistId) {
        const wishlist = await this.findOne({
            where: { id: wishlistId },
            relations: ['owner'],
        });
        if (wishlist.owner.id !== userId) {
            throw new common_1.ForbiddenException('Вы не можете удалить чужой вишлист');
        }
        return this.wishListRepository.remove(wishlist);
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map