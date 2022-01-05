"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostUpdateWithoutAuthorInput_1 = require("../inputs/PostUpdateWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutAuthorInput = class PostUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateWithoutAuthorInput_1.PostUpdateWithoutAuthorInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutAuthorInput);
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = PostUpdateWithWhereUniqueWithoutAuthorInput;
