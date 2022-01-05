"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutAuthorInput = class PostCreateOrConnectWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
PostCreateOrConnectWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutAuthorInput);
exports.PostCreateOrConnectWithoutAuthorInput = PostCreateOrConnectWithoutAuthorInput;
