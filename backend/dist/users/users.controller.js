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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const passport_1 = require("@nestjs/passport");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const get_my_profile_info_response_dto_1 = require("./dto/getMyProfileInfoDto/get-my-profile-info-response.dto");
const update_my_profile_info_request_dto_1 = require("./dto/updateMyProfileInfoDto/update-my-profile-info-request.dto");
const update_my_profile_info_response_dto_1 = require("./dto/updateMyProfileInfoDto/update-my-profile-info-response.dto");
const get_users_info_response_dto_1 = require("./dto/getUsersInfoDto/get-users-info-response.dto");
const get_users_info_request_dto_1 = require("./dto/getUsersInfoDto/get-users-info-request.dto");
const get_my_wishes_response_dto_1 = require("./dto/getMyWishesDto/get-my-wishes-response.dto");
const get_users_info_by_username_response_dto_1 = require("./dto/getUserInfoByUsername/get-users-info-by-username-response.dto");
const get_user_wishes_response_dto_1 = require("./dto/getUserWishesDto/get-user-wishes-response.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findOne(req) {
        const foundUser = await this.usersService.findOne({
            where: { id: req.user.id },
        });
        return (0, class_transformer_1.plainToInstance)(get_my_profile_info_response_dto_1.GetMyProfileInfoResponseDto, foundUser, {
            excludeExtraneousValues: true,
        });
    }
    async update(req, body) {
        const updatedUser = await this.usersService.updateOne({
            where: { id: req.user.id },
        }, body);
        return (0, class_transformer_1.plainToInstance)(update_my_profile_info_response_dto_1.UpdateMyProfileInfoResponseDto, updatedUser, {
            excludeExtraneousValues: true,
        });
    }
    async findMany(dto) {
        const rawList = await this.usersService.findAll({
            where: [
                { username: (0, typeorm_1.ILike)(`%${dto.query}%`) },
                { email: (0, typeorm_1.ILike)(`%${dto.query}%`) },
            ],
        });
        const preparedResults = rawList.map((user) => (0, class_transformer_1.plainToInstance)(get_users_info_response_dto_1.GetUsersInfoResponseDto, user, {
            excludeExtraneousValues: true,
        }));
        return preparedResults;
    }
    async getMyWishes(req) {
        const wishes = await this.usersService.getUserWishes(req.user.id);
        const plaiin = (0, class_transformer_1.instanceToPlain)(wishes);
        return (0, class_transformer_1.plainToInstance)(get_my_wishes_response_dto_1.GetMyWishesResponseDto, plaiin, {
            excludeExtraneousValues: true,
        });
    }
    async getUserWishes(username) {
        const { id } = await this.usersService.findOne({
            where: {
                username,
            },
        });
        const userWishes = await this.usersService.getUserWishes(id);
        const plaiin = (0, class_transformer_1.instanceToPlain)(userWishes);
        return (0, class_transformer_1.plainToInstance)(get_user_wishes_response_dto_1.GetUserWishesResponseDto, plaiin, {
            excludeExtraneousValues: true,
        });
    }
    async findUserByUsername(username) {
        const foundUser = await this.usersService.findOne({
            where: {
                username,
            },
        });
        const plain = (0, class_transformer_1.instanceToPlain)(foundUser);
        return (0, class_transformer_1.plainToInstance)(get_users_info_by_username_response_dto_1.GetUserInfoByUsernameResponse, plain, {
            excludeExtraneousValues: true,
        });
    }
};
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_my_profile_info_request_dto_1.UpdateMyProfileInfoRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('find'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_info_request_dto_1.GetUsersInfoRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)('me/wishes'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyWishes", null);
__decorate([
    (0, common_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserWishes", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserByUsername", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map