"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Role_1 = require("../enums/Role");
const UserCount_1 = require("../resolvers/outputs/UserCount");
let User = class User {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCount_1.UserCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCount_1.UserCount)
], User.prototype, "_count", void 0);
User = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("User", {
        isAbstract: true
    })
], User);
exports.User = User;
