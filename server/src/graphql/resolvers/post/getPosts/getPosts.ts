import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { GetPostsInput } from "../../../inputs/post/GetPostsInput";
import { PostsResponse } from "../../../responses/post/PostsResponse";

@Resolver(Post)
export class GetPostsResolver {
  @Query(() => PostsResponse, { nullable: true })
  async getPosts(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: GetPostsInput
  ): Promise<PostsResponse> {
    const realLimit = Math.min(50, input.limit);
    const realLimitPlusOne = realLimit + 1;

    const posts = await prisma.post.findMany({
      include: { tags: true },

      cursor: input?.cursor
        ? {
            id: input?.cursor,
          }
        : undefined,

      take: realLimitPlusOne,
    });
    console.log(posts);

    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }
}
