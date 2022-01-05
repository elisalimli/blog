import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { User } from "../../../../../generated";
import { GiveRoleInput } from "../../../inputs/user/GiveRoleInput";
import { isAdmin } from "../../../middlewares/isAdmin";
import { isAuth } from "../../../middlewares/isAuth";

@Resolver(User)
export class GiveRoleResolver {
  @Mutation(() => User)
  @UseMiddleware(isAuth, isAdmin)
  async giveRole(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { userId, value }: GiveRoleInput
  ) {
    const isAuthor = value === 0;
    return prisma.user.update({
      data: { role: isAuthor ? "AUTHOR" : "USER" },
      where: { id: userId },
      select: { role: true },
    });
  }
}
