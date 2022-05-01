import { Ctx, Query, Resolver } from "type-graphql";
import { Category } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";

@Resolver(Category)
export class GetCategoriesResolver {
  @Query(() => [Category], { nullable: true })
  async categories(@Ctx() { prisma }: MyContext) {
    return prisma.category.findMany();
  }
}
