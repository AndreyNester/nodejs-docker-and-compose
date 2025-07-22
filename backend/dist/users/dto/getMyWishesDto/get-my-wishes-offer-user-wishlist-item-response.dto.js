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
exports.GetMyWishesOfferuserWishlistItemResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
class GetMyWishesOfferuserWishlistItemResponseDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "link", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "image", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "raised", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "copied", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetMyWishesOfferuserWishlistItemResponseDto.prototype, "description", void 0);
exports.GetMyWishesOfferuserWishlistItemResponseDto = GetMyWishesOfferuserWishlistItemResponseDto;
//# sourceMappingURL=get-my-wishes-offer-user-wishlist-item-response.dto.js.map