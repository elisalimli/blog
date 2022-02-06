import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { UpdatePostInput } from "../../../inputs/post/UpdatePostInput";
import { isAuthor } from "../../../middlewares/isAuthor";

@Resolver(Post)
export class UpdatePostResolver {
  @Mutation(() => Post)
  @UseMiddleware(isAuthor)
  async updatePost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: UpdatePostInput
  ) {
    const { content, published, title } = input;
    const post = await prisma.post.update({
      where: { id: input.postId },
      data: { content, published, title },
    });
    console.log(post);
    return post;
  }
}
