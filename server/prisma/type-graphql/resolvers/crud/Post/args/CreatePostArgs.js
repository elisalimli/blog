"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateInput_1 = require("../../../inputs/PostCreateInput");
let CreatePostArgs = class CreatePostArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateInput_1.PostCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateInput_1.PostCreateInput)
], CreatePostArgs.prototype, "data", void 0);
CreatePostArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreatePostArgs);
exports.CreatePostArgs = CreatePostArgs;
