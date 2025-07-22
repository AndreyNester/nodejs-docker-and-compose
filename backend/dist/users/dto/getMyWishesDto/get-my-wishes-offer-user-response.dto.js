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
exports.GetMyWishesOfferUserResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const get_my_wishes_offer_user_wishlist_response_dto_1 = require("./get-my-wishes-offer-user-wishlist-response.dto");
class GetMyWishesOfferUserResponseDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferUserResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferUserResponseDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferUserResponseDto.prototype, "about", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferUserResponseDto.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferUserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferUserResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], GetMyWishesOfferUserResponseDto.prototype, "wishes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], GetMyWishesOfferUserResponseDto.prototype, "offers", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => get_my_wishes_offer_user_wishlist_response_dto_1.GetMyWishesOfferuserWishlistResponseDto),
    __metadata("design:type", Array)
], GetMyWishesOfferUserResponseDto.prototype, "wishlists", void 0);
exports.GetMyWishesOfferUserResponseDto = GetMyWishesOfferUserResponseDto;
//# sourceMappingURL=get-my-wishes-offer-user-response.dto.js.map