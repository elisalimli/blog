import { Prisma } from "@prisma/client";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { PostEntity } from "../../../entity/Post";
import { GetPostsByCategoryInput } from "../../../inputs/post/GetPostsByCategoryInput";

@Resolver(Post)
export class GetPostsByCategoryResolver {
  @Query(() => [PostEntity], { nullable: true })
  async postsByCategory(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { categoryId }: GetPostsByCategoryInput
  ): Promise<PostEntity[]> {
    const posts = await prisma.$queryRaw<PostEntity[]>`
      SELECT p.* FROM post p
     ${
       categoryId
         ? Prisma.sql`
           full join posts_categories pc on pc."categoryId" = ${categoryId}
            WHERE p.id = pc."postId"
          `
         : Prisma.empty
     }  
    `;

    return posts;
  }
}
