"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateManyInput_1 = require("../../../inputs/PostCreateManyInput");
let CreateManyPostArgs = class CreateManyPostArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateManyInput_1.PostCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyPostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
CreateManyPostArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyPostArgs);
exports.CreateManyPostArgs = CreateManyPostArgs;
