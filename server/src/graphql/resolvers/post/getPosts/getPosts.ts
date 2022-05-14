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
    const realLimit = Math.min(50, input.limit as number);
    const realLimitPlusOne = realLimit + 1;

    const { cursor } = input;
    const posts = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.*,json_build_object('id',c.id,'name',c.name) category FROM post p
    join posts_categories pc on pc."postId" = p.id
    join category c on c.id = pc."categoryId"
    ${cursor ? Prisma.sql`WHERE p."createdAt" < ${cursor}` : Prisma.empty}
    GROUP BY p.id,c.id
    ORDER BY p."createdAt" DESC
    LIMIT ${realLimitPlusOne}
    `;

    console.log(posts);
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
}
