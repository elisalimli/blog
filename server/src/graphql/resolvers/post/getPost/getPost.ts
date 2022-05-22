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
    SELECT p.*,json_agg(json_build_object('id',t.id,'name',t.name)) tags FROM post p
    join posts_categories pc on pc."postId" = p.id
    join categories_tags ct on ct."categoryId" =  pc."categoryId"
    join tag t on t.id = ct."tagId"    
    WHERE p.id = ${postId}
    GROUP BY p.id
    `;

    return post[0];
  }
}
