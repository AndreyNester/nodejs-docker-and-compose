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
exports.OffersController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const offers_service_1 = require("./offers.service");
const create_offer_dto_1 = require("./dto/create-offer.dto");
const offer_response_dto_1 = require("./dto/offer-response.dto");
const class_transformer_1 = require("class-transformer");
let OffersController = class OffersController {
    constructor(offerService) {
        this.offerService = offerService;
    }
    async create(req, dto) {
        const rawOffer = await this.offerService.createOfferWithCheck(dto, req.user.id);
        const plain = (0, class_transformer_1.instanceToPlain)(rawOffer);
        return (0, class_transformer_1.plainToInstance)(offer_response_dto_1.OfferResponseDto, plain, {
            excludeExtraneousValues: true,
        });
    }
    async getMyOffers(req) {
        const offers = await this.offerService.findAll({
            where: {
                user: { id: req.user.id },
            },
            relations: ['user', 'item'],
        });
        return (0, class_transformer_1.plainToInstance)(offer_response_dto_1.OfferResponseDto, offers, {
            excludeExtraneousValues: true,
        });
    }
    async getOfferById(id, req) {
        const offer = await this.offerService.findOne({
            where: {
                user: {
                    id: req.user.id,
                },
            },
            relations: ['user', 'item'],
        });
        return (0, class_transformer_1.plainToInstance)(offer_response_dto_1.OfferResponseDto, offer, {
            excludeExtraneousValues: true,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_offer_dto_1.CreateOfferDto]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "getMyOffers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "getOfferById", null);
OffersController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('offers'),
    __metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
exports.OffersController = OffersController;
//# sourceMappingURL=offers.controller.js.map