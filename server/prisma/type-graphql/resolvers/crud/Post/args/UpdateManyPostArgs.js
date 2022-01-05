"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostUpdateManyMutationInput_1 = require("../../../inputs/PostUpdateManyMutationInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
let UpdateManyPostArgs = class UpdateManyPostArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateManyMutationInput_1.PostUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateManyMutationInput_1.PostUpdateManyMutationInput)
], UpdateManyPostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereInput_1.PostWhereInput)
], UpdateManyPostArgs.prototype, "where", void 0);
UpdateManyPostArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyPostArgs);
exports.UpdateManyPostArgs = UpdateManyPostArgs;
