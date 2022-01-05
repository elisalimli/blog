import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { User } from "../../../../../generated";

@Resolver(User)
export class MeResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req, prisma }: MyContext): Promise<any> | null {
    console.log("r", req.session.userId);
    console.log("req.session.userId 2");
    const id = req.session.userId;
    if (!id) return null;
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
