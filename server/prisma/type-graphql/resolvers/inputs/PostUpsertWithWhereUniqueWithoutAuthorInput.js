"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostUpdateWithoutAuthorInput_1 = require("../inputs/PostUpdateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutAuthorInput = class PostUpsertWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutAuthorInput);
exports.PostUpsertWithWhereUniqueWithoutAuthorInput = PostUpsertWithWhereUniqueWithoutAuthorInput;
