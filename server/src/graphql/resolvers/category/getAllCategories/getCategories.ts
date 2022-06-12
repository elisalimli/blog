import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Category } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";

@Resolver(Category)
export class GetCategoriesResolver {
  @Query(() => [Category], { nullable: true })
  async categories(@Ctx() { prisma }: MyContext) {
    return prisma.category.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  @FieldResolver()
  pictureUrl(@Root() category: Category, @Ctx() { req }: MyContext) {
    // ...
    console.log("req", req.protocol, req.headers.host, req.url);
    // http://localhost:4000/images/image.name
    return `${req.protocol}://${req.headers.host}${req.url}images/${category.pictureUrl}`;
  }
}
