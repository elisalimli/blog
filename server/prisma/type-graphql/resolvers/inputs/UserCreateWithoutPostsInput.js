"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Role_1 = require("../../enums/Role");
let UserCreateWithoutPostsInput = class UserCreateWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "role", void 0);
UserCreateWithoutPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
        isAbstract: true
    })
], UserCreateWithoutPostsInput);
exports.UserCreateWithoutPostsInput = UserCreateWithoutPostsInput;
