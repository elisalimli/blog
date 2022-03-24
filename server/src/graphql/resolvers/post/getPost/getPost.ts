import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { GetPostInput } from "../../../inputs/post/GetPostInput";

@Resolver(Post)
export class GetPostResolver {
  @Query(() => Post, { nullable: true })
  async getPost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { postId }: GetPostInput
  ): Promise<Post> {
    const post = (await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    }))!;
    console.log("post", post);
    return post;
  }
}
