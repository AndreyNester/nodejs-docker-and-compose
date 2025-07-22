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
exports.WishlistsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_wishlist_dto_1 = require("./dto/create.wishlist.dto");
const wishlist_response_dto_1 = require("./dto/wishlist-response.dto");
const wishlists_service_1 = require("./wishlists.service");
const class_transformer_1 = require("class-transformer");
const update_wishlist_dto_1 = require("./dto/update-wishlist.dto");
let WishlistsController = class WishlistsController {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    async create(dto, req) {
        const rawWishList = await this.wishlistService.createWithUser(dto, req.user.id);
        const wishList = (0, class_transformer_1.instanceToPlain)(rawWishList);
        return (0, class_transformer_1.plainToInstance)(wishlist_response_dto_1.WishlistResponseDto, wishList, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        const rawWishLists = await this.wishlistService.findAll({
            relations: ['owner', 'items'],
        });
        return (0, class_transformer_1.plainToInstance)(wishlist_response_dto_1.WishlistResponseDto, rawWishLists, {
            excludeExtraneousValues: true,
        });
    }
    async findById(id) {
        const rawWishList = await this.wishlistService.findOne({
            where: {
                id,
            },
            relations: ['owner', 'items'],
        });
        return (0, class_transformer_1.plainToInstance)(wishlist_response_dto_1.WishlistResponseDto, rawWishList, {
            excludeExtraneousValues: true,
        });
    }
    async updateWishlist(id, dto, req) {
        const updated = await this.wishlistService.updateWithUserCheck(id, req.user.id, dto);
        const plain = (0, class_transformer_1.instanceToPlain)(updated);
        return (0, class_transformer_1.plainToInstance)(wishlist_response_dto_1.WishlistResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
    async remove(id, req) {
        const removerWishlist = await this.wishlistService.removeWithCheck(req.user.id, id);
        const plain = (0, class_transformer_1.instanceToPlain)(removerWishlist);
        return (0, class_transformer_1.plainToInstance)(wishlist_response_dto_1.WishlistResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wishlist_dto_1.CreateWishlistDto, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_wishlist_dto_1.UpdateWishlistDto, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "updateWishlist", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishlistsController.prototype, "remove", null);
WishlistsController = __decorate([
    (0, common_1.Controller)('wishlists'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
exports.WishlistsController = WishlistsController;
//# sourceMappingURL=wishlists.controller.js.map