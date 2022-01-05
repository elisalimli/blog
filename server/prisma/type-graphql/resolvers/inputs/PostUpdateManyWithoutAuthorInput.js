"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateManyAuthorInputEnvelope_1 = require("../inputs/PostCreateManyAuthorInputEnvelope");
const PostCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PostCreateOrConnectWithoutAuthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutAuthorInput");
const PostUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput");
const PostUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput_1.PostCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput_1.PostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope)
], PostUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput_1.PostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutAuthorInput_1.PostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
