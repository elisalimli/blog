"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostUpdateInput_1 = require("../../../inputs/PostUpdateInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let UpdatePostArgs = class UpdatePostArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateInput_1.PostUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateInput_1.PostUpdateInput)
], UpdatePostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], UpdatePostArgs.prototype, "where", void 0);
UpdatePostArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdatePostArgs);
exports.UpdatePostArgs = UpdatePostArgs;
