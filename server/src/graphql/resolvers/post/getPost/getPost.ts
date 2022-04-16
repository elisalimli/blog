import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostInput } from "../../../inputs/post/GetPostInput";

@Resolver(Post)
export class GetPostResolver {
  @Query(() => PostEntity, { nullable: true })
  async post(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { postId }: GetPostInput
  ) {
    const post = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.* from post p WHERE p.id = ${postId}
    `;
    console.log("post", post[0]?.tags);

    return post[0];
  }
}
