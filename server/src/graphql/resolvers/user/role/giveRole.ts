import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { GiveRoleInput } from "../../../inputs/user/GiveRoleInput";

@Resolver(User)
export class GiveRoleResolver {
  // @Authorized(["ADMIN", "AUTHOR"])
  @Mutation(() => User)
  async giveRole(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { userId, role }: GiveRoleInput
  ) {
    console.log(role);
    return prisma.user.update({
      data: { role },
      where: { id: userId },
      select: { role: true },
    });
  }
}
