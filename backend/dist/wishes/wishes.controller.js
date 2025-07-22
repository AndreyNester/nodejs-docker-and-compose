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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_wish_dto_1 = require("./dto/create-wish.dto");
const wishes_service_1 = require("./wishes.service");
const class_transformer_1 = require("class-transformer");
const wish_response_dto_1 = require("./dto/wish-response.dto");
const update_wish_dto_1 = require("./dto/update-wish.dto");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    async createWish(dto, req) {
        const rawResult = await this.wishesService.create(dto, req.user.id);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, rawResult, {
            excludeExtraneousValues: true,
        });
    }
    async getLastWishes() {
        const rawResult = await this.wishesService.getLastWishes(15);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, rawResult, {
            excludeExtraneousValues: true,
        });
    }
    async GetTopWishes() {
        const rawResult = await this.wishesService.getTopWishes(15);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, rawResult, {
            excludeExtraneousValues: true,
        });
    }
    async findOneById(id) {
        const rawWish = await this.wishesService.findOne({
            where: {
                id,
            },
            relations: ['owner', 'offers', 'offers.user'],
        });
        const plain = (0, class_transformer_1.instanceToPlain)(rawWish);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
    async updateWish(id, dto, req) {
        const updatedWish = await this.wishesService.updateWishWithCheck(req.user.id, id, dto);
        const plain = (0, class_transformer_1.instanceToPlain)(updatedWish);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
    async deleteWish(id, req) {
        const rawWish = await this.wishesService.deleteWishWithCheck(req.user.id, id);
        const plain = (0, class_transformer_1.instanceToPlain)(rawWish);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
    async copyWish(req, wishId) {
        const rawResult = await this.wishesService.copyWish(req.user.id, wishId);
        return (0, class_transformer_1.plainToInstance)(wish_response_dto_1.WishResponseDto, rawResult, {
            excludeExtraneousValues: true,
        });
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wish_dto_1.CreateWishDto, Object]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "createWish", null);
__decorate([
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "getLastWishes", null);
__decorate([
    (0, common_1.Get)('top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "GetTopWishes", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findOneById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_wish_dto_1.UpdateWishDto, Object]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "updateWish", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "deleteWish", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(':id/copy'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "copyWish", null);
WishesController = __decorate([
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map