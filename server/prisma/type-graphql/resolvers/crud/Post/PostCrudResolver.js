"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const CreateManyPostArgs_1 = require("./args/CreateManyPostArgs");
const CreatePostArgs_1 = require("./args/CreatePostArgs");
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const DeletePostArgs_1 = require("./args/DeletePostArgs");
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const FindUniquePostArgs_1 = require("./args/FindUniquePostArgs");
const GroupByPostArgs_1 = require("./args/GroupByPostArgs");
const UpdateManyPostArgs_1 = require("./args/UpdateManyPostArgs");
const UpdatePostArgs_1 = require("./args/UpdatePostArgs");
const UpsertPostArgs_1 = require("./args/UpsertPostArgs");
const helpers_1 = require("../../../helpers");
const Post_1 = require("../../../models/Post");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const PostGroupBy_1 = require("../../outputs/PostGroupBy");
let PostCrudResolver = class PostCrudResolver {
    async post(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async posts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePost(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPost(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniquePostArgs_1.FindUniquePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "post", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Post_1.Post], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyPostArgs_1.FindManyPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "posts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreatePostArgs_1.CreatePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "createPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyPostArgs_1.CreateManyPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "createManyPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeletePostArgs_1.DeletePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "deletePost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdatePostArgs_1.UpdatePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "updatePost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteManyPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyPostArgs_1.UpdateManyPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "updateManyPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertPostArgs_1.UpsertPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "upsertPost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "aggregatePost", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PostGroupBy_1.PostGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPostArgs_1.GroupByPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostCrudResolver.prototype, "groupByPost", null);
PostCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostCrudResolver);
exports.PostCrudResolver = PostCrudResolver;
