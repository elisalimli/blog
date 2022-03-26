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

    // const posts = await prisma.post.findMany({
    //   include: {
    //     tags: {
    //       include: {
    //         tag: true,
    //       },[]
    //     },
    //   },

    //   cursor: input?.cursor
    //     ? {
    //         id: input?.cursor,
    //       }
    //     : undefined,

    //   take: realLimitPlusOne,
    // });

    const { cursor } = input;
    const posts = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.*,json_agg(json_build_object('id',t.id,'name',t.name)) tags 
    FROM post p join "PostTags" pt on pt."postId" = p.id 
    join "Tag" t on t.id = pt."tagId" ${
      cursor ? Prisma.sql`WHERE p."createdAt" < ${cursor}` : Prisma.empty
    }
    GROUP BY p.id
    ORDER BY p."createdAt" DESC
    LIMIT ${realLimitPlusOne}
    `;
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
}
