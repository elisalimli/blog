import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostsByTagInput } from "../../../inputs/post/GetPostByTagInput";

@Resolver(Post)
export class GetPostsByTagResolver {
  @Query(() => [PostEntity], { nullable: true })
  async postsByTag(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { tagId }: GetPostsByTagInput
  ): Promise<PostEntity[]> {
    const posts = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.*,json_agg(json_build_object('id',t.id,'name',t.name)) as tags from "PostTags" pt 
    join post p on p.id = pt."postId"
    join "PostTags" pt2  on pt2."postId" = p.id
    join "Tag" t on t.id = pt2."tagId" 
    WHERE pt."tagId"= ${tagId}
    GROUP BY p.id
    `;

    return posts;
  }
}
