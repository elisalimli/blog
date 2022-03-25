import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entitites/Post";
import { GetPostInput } from "../../../inputs/post/GetPostInput";

@Resolver(Post)
export class GetPostResolver {
  @Query(() => PostEntity, { nullable: true })
  async post(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { postId }: GetPostInput
  ) {
    const post = await prisma.$queryRaw<PostEntity[]>`
    SELECT p.*,json_agg(json_build_object('id',t.id,'name',t.name)) tags 
    FROM post p left join "PostTags" pt on pt."postId" = ${postId} 
    left join "Tag" t on t.id = pt."tagId" WHERE p.id = ${postId}
    GROUP BY p.id
    `;
    console.log("post", post[0]?.tags);

    return post[0];
  }
}
