import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostsByTagInput } from "../../../inputs/post/GetPostByTagInput";

@Resolver(Post)
export class GetPostsByCategoryResolver {
  @Query(() => [PostEntity], { nullable: true })
  async postsByCategory(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { tagId }: GetPostsByTagInput
  ): Promise<PostEntity[]> {
    const posts = await prisma.$queryRaw<PostEntity[]>`
      SELECT * from post where;
    `;

    return posts;
  }
}
