"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCountOrderByAggregateInput_1 = require("../inputs/PostCountOrderByAggregateInput");
const PostMaxOrderByAggregateInput_1 = require("../inputs/PostMaxOrderByAggregateInput");
const PostMinOrderByAggregateInput_1 = require("../inputs/PostMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
PostOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostOrderByWithAggregationInput", {
        isAbstract: true
    })
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
