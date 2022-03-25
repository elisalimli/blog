import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entitites/Post";
import { GetPostsInput } from "../../../inputs/post/GetPostsInput";
import { PostsResponse } from "../../../responses/post/PostsResponse";

@Resolver(PostEntity)
export class GetPostsResolver {
  @Query(() => PostsResponse, { nullable: true })
  async getPosts(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: GetPostsInput
  ) {
    const realLimit = Math.min(50, input.limit);
    const realLimitPlusOne = realLimit + 1;

    const posts = await prisma.post.findMany({
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },

      cursor: input?.cursor
        ? {
            id: input?.cursor,
          }
        : undefined,

      take: realLimitPlusOne,
    });
    console.log(posts[1]);

    const start = input?.cursor ? 1 : 0;
    return {
      posts: posts.slice(start, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
}
