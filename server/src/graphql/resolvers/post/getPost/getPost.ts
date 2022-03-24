import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entitites/Post";
import { GetPostInput } from "../../../inputs/post/GetPostInput";

@Resolver(PostEntity)
export class GetPostResolver {
  @Query(() => PostEntity, { nullable: true })
  async getPost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { postId }: GetPostInput
  ) {
    const post = await prisma.post.findUnique({
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
    });
    return post;
  }
}
