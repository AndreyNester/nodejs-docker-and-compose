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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyWishesOfferResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const get_my_wishes_offer_user_response_dto_1 = require("./get-my-wishes-offer-user-response.dto");
class GetMyWishesOfferResponseDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferResponseDto.prototype, "item", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferResponseDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], GetMyWishesOfferResponseDto.prototype, "hidden", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => get_my_wishes_offer_user_response_dto_1.GetMyWishesOfferUserResponseDto),
    __metadata("design:type", get_my_wishes_offer_user_response_dto_1.GetMyWishesOfferUserResponseDto)
], GetMyWishesOfferResponseDto.prototype, "user", void 0);
exports.GetMyWishesOfferResponseDto = GetMyWishesOfferResponseDto;
//# sourceMappingURL=get-my-wishes-offer-response.dto.js.map