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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const wish_entity_1 = require("./wish.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let WishesService = class WishesService {
    constructor(wishRepository, userService) {
        this.wishRepository = wishRepository;
        this.userService = userService;
    }
    async create(createWishDto, userId) {
        const owner = await this.userService.findOne({
            where: { id: userId },
        });
        const preCreatedWish = this.wishRepository.create(Object.assign(Object.assign({}, createWishDto), { owner }));
        return this.wishRepository.save(preCreatedWish);
    }
    async findOne(findOptions) {
        const foundWish = await this.wishRepository.findOne(findOptions);
        if (!foundWish) {
            throw new common_1.NotFoundException('Подарок не найден');
        }
        return foundWish;
    }
    async findAll(findOptions) {
        return this.wishRepository.find(findOptions);
    }
    async updateOne(findOptions, updateWishDto) {
        const wishFromDb = await this.wishRepository.findOne(findOptions);
        if (!wishFromDb) {
            throw new common_1.NotFoundException('Wish not found');
        }
        const updatedWish = Object.assign(wishFromDb, updateWishDto);
        return this.wishRepository.save(updatedWish);
    }
    async removeOne(findOptions) {
        const targetWish = await this.wishRepository.findOne(findOptions);
        if (!targetWish) {
            throw new common_1.NotFoundException('Wish not found');
        }
        await this.wishRepository.remove(targetWish);
    }
    async updateWishWithCheck(userId, wishId, dto) {
        const wish = await this.findOne({
            where: { id: wishId },
            relations: ['owner', 'offers'],
        });
        if (!wish)
            throw new common_1.NotFoundException('Подарок не найден');
        if (wish.owner.id !== userId) {
            throw new common_1.ForbiddenException('Нельзя редактировать чужой подарок');
        }
        if (dto.price !== undefined &&
            dto.price !== wish.price &&
            wish.offers.length > 0) {
            throw new common_1.BadRequestException('Нельзя изменить цену, если есть скидывающиеся пользователи');
        }
        Object.assign(wish, dto);
        return this.wishRepository.save(wish);
    }
    async deleteWishWithCheck(userId, wishId) {
        const wishFromDb = await this.wishRepository.findOne({
            where: {
                id: wishId,
            },
            relations: ['owner', 'offers'],
        });
        if (!wishFromDb) {
            throw new common_1.NotFoundException('Такого подарке не существует');
        }
        if (wishFromDb.owner.id !== userId) {
            throw new common_1.ForbiddenException('Нельзя удалять не свой подарок');
        }
        if (wishFromDb.offers.length > 0) {
            throw new common_1.BadRequestException('Нельзя удалить подарок у которого уже есть жалеющие скинуться');
        }
        return this.wishRepository.remove(wishFromDb);
    }
    async getLastWishes(amount) {
        return this.wishRepository.find({
            take: amount,
            order: {
                createdAt: 'DESC',
            },
            relations: [
                'owner',
                'offers',
                'offers.user',
                'offers.user.wishlists',
                'offers.user.wishlists.owner',
                'offers.user.wishlists.items',
            ],
        });
    }
    async getTopWishes(amount) {
        return this.wishRepository.find({
            take: amount,
            order: {
                copied: 'DESC',
            },
            relations: [
                'owner',
                'offers',
                'offers.user',
                'offers.user.wishlists',
                'offers.user.wishlists.owner',
                'offers.user.wishlists.items',
            ],
        });
    }
    async copyWish(newOwnerId, originalWishId) {
        const originalWish = await this.findOne({
            where: { id: originalWishId },
        });
        originalWish.copied += 1;
        await this.wishRepository.save(originalWish);
        const newOwner = await this.userService.findOne({
            where: {
                id: newOwnerId,
            },
        });
        const copiedWish = this.wishRepository.create({
            name: originalWish.name,
            description: originalWish.description,
            image: originalWish.image,
            link: originalWish.link,
            price: originalWish.price,
            raised: 0,
            owner: newOwner,
        });
        return this.wishRepository.save(copiedWish);
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map