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
exports.GetUserWishesOfferResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const get_user_wishes_offer_user_response_dto_1 = require("./get-user-wishes-offer-user-response.dto");
class GetUserWishesOfferResponseDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetUserWishesOfferResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetUserWishesOfferResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetUserWishesOfferResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetUserWishesOfferResponseDto.prototype, "item", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetUserWishesOfferResponseDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], GetUserWishesOfferResponseDto.prototype, "hidden", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => get_user_wishes_offer_user_response_dto_1.GetUserWishesOfferUserResponseDto),
    __metadata("design:type", get_user_wishes_offer_user_response_dto_1.GetUserWishesOfferUserResponseDto)
], GetUserWishesOfferResponseDto.prototype, "user", void 0);
exports.GetUserWishesOfferResponseDto = GetUserWishesOfferResponseDto;
//# sourceMappingURL=get-user-wishes-offer-response.dto.js.map