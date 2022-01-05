"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyMutationInput_1 = require("../inputs/PostUpdateManyMutationInput");
let PostUpdateManyWithWhereWithoutAuthorInput = class PostUpdateManyWithWhereWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostScalarWhereInput_1.PostScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostScalarWhereInput_1.PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateManyMutationInput_1.PostUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateManyMutationInput_1.PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateManyWithWhereWithoutAuthorInput);
exports.PostUpdateManyWithWhereWithoutAuthorInput = PostUpdateManyWithWhereWithoutAuthorInput;
