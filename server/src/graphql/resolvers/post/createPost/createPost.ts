import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { CreatePostInput } from "../../../inputs/post/CreatePostInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";

@Resolver(Post)
export class CreatePostResolver {
  @Mutation(() => Post)
  @UseMiddleware(isAuth, isAuthor)
  async createPost(
    @Ctx() { prisma, req }: MyContext,
    @Arg("input") input: CreatePostInput
  ) {
    const { userId } = req.session;
    const post = await prisma.post.create({
      data: {
        ...input,
        creatorId: userId as string,
        tags: { create: [{ name: "dev2" }, { name: "prisma2" }] },
      },
    });
    console.log(post);
    return post;
  }
}
