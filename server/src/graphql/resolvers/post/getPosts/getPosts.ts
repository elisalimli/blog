import { Prisma } from "@prisma/client";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostsInput } from "../../../inputs/post/GetPostsInput";
import { PostsResponse } from "../../../responses/post/PostsResponse";

@Resolver(Post)
export class GetPostsResolver {
  @Query(() => PostsResponse, { nullable: true })
  async posts(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: GetPostsInput
  ) {
    const realLimit = Math.min(50, input.limit);
    const realLimitPlusOne = realLimit + 1;

    const { cursor } = input;
    const posts = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.*,json_agg(json_build_object('id',t.id,'name',t.name)) tags FROM post p
    join posts_categories pc on pc."postId" = p.id
    join categories_tags ct on ct."categoryId" = pc."categoryId"
    join tag t on t.id = ct."tagId"
     ${cursor ? Prisma.sql`WHERE p."createdAt" < ${cursor}` : Prisma.empty}
    GROUP BY p.id
    ORDER BY p."createdAt" DESC
    LIMIT ${realLimitPlusOne}
    `;

    console.log("getposts : ", posts);
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
}
