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
exports.GetMyWishesOfferuserWishlistResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const get_my_wishes_offer_user_wishlist_item_response_dto_1 = require("./get-my-wishes-offer-user-wishlist-item-response.dto");
const user_public_profile_response_dto_1 = require("../user-public-profile-response.dto");
class GetMyWishesOfferuserWishlistResponseDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "image", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => user_public_profile_response_dto_1.UserPublicProfileResponseDto),
    __metadata("design:type", user_public_profile_response_dto_1.UserPublicProfileResponseDto)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "owner", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => get_my_wishes_offer_user_wishlist_item_response_dto_1.GetMyWishesOfferuserWishlistItemResponseDto),
    __metadata("design:type", Array)
], GetMyWishesOfferuserWishlistResponseDto.prototype, "items", void 0);
exports.GetMyWishesOfferuserWishlistResponseDto = GetMyWishesOfferuserWishlistResponseDto;
//# sourceMappingURL=get-my-wishes-offer-user-wishlist-response.dto.js.map