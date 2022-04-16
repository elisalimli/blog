import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post, Tag } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostsByTagInput } from "../../../inputs/post/GetPostByTagInput";

@Resolver(Tag)
export class GetTagsResolver {
  @Query(() => [Tag], { nullable: true })
  async tags(@Ctx() { prisma }: MyContext): Promise<Tag[]> {
    const tags = await prisma.$queryRaw<Tag[]>`
        SELECT * FROM tag;
    `;

    return tags;
  }
}
