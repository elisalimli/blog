import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { GetPostInput } from "../../../inputs/post/GetPostInput";

@Resolver(Post)
export class GetPostResolver {
  @Query(() => Post, { nullable: true })
  getPost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { postId }: GetPostInput
  ) {
    return prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
  }
}
