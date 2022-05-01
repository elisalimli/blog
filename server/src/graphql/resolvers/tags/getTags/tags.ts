import { Ctx, Query, Resolver } from "type-graphql";
import { Tag } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";

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
