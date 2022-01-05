"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const Post_1 = require("../../../models/Post");
const helpers_1 = require("../../../helpers");
let FindManyPostResolver = class FindManyPostResolver {
    async posts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyPostResolver.prototype, "posts", null);
FindManyPostResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], FindManyPostResolver);
exports.FindManyPostResolver = FindManyPostResolver;
