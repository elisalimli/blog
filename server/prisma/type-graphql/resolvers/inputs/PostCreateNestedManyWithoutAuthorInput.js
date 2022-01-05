"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateManyAuthorInputEnvelope_1 = require("../inputs/PostCreateManyAuthorInputEnvelope");
const PostCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PostCreateOrConnectWithoutAuthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutAuthorInput = class PostCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput_1.PostCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope)
], PostCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutAuthorInput);
exports.PostCreateNestedManyWithoutAuthorInput = PostCreateNestedManyWithoutAuthorInput;
