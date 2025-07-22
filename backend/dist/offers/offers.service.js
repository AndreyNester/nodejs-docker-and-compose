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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("./offer.entity");
const typeorm_2 = require("typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
let OffersService = class OffersService {
    constructor(offerRepository, wishesService) {
        this.offerRepository = offerRepository;
        this.wishesService = wishesService;
    }
    async create(createOfferDto) {
        const preCreatedOffer = this.offerRepository.create(createOfferDto);
        return this.offerRepository.save(preCreatedOffer);
    }
    async findOne(findOptions) {
        const targetOfferr = await this.offerRepository.findOne(findOptions);
        if (!targetOfferr) {
            throw new common_1.NotFoundException('Offer not found');
        }
        return targetOfferr;
    }
    async findAll(findOptions) {
        return this.offerRepository.find(findOptions);
    }
    async update(findOptions, updateOfferDto) {
        const targetOffer = await this.offerRepository.findOne(findOptions);
        if (!targetOffer) {
            throw new common_1.NotFoundException('Offer not found');
        }
        const newOffer = Object.assign({}, targetOffer, updateOfferDto);
        return this.offerRepository.save(newOffer);
    }
    async remove(findOptions) {
        const targetOffer = await this.offerRepository.findOne(findOptions);
        if (!targetOffer) {
            throw new common_1.NotFoundException('Offer not found');
        }
        await this.offerRepository.remove(targetOffer);
    }
    async createOfferWithCheck(dto, userId) {
        const wish = await this.wishesService.findOne({
            where: { id: dto.itemId },
            relations: ['owner', 'offers'],
        });
        if (wish.owner.id === userId) {
            throw new common_1.ForbiddenException('Нельзя скидываться на свой подарок');
        }
        const totalRaised = Number(wish.raised);
        const remaining = wish.price - totalRaised;
        if (dto.amount > remaining) {
            throw new common_1.BadRequestException(`Сумма превышает остаток: можно максимум ${remaining}`);
        }
        const raised = totalRaised + dto.amount;
        await this.wishesService.updateOne({
            where: {
                id: dto.itemId,
            },
        }, {
            raised,
        });
        const offer = this.offerRepository.create({
            amount: dto.amount,
            hidden: false,
            user: { id: userId },
            item: { id: dto.itemId },
        });
        return this.offerRepository.save(offer);
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map