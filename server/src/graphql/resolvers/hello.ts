import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../../generated";
import { MyContext } from "../../utils/MyContext";

@Resolver()
export class HelloResolver {
  @Query(() => [User])
  allUsers(@Ctx() { prisma }: MyContext) {
    return prisma.user.findMany();
  }
}
