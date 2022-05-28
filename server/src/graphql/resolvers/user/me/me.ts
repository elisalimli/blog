import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { UserEntity } from "../../../entity/User";

@Resolver(UserEntity)
export class MeResolver {
  @Query(() => UserEntity, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    //@ts-ignore
    const user = req?.user?._json as UserEntity;
    //@ts-ignore
    user.id = req!.user!.id;
    if (!user?.id) return null;
    return user;
  }

  @FieldResolver()
  async role(@Root() root: UserEntity, @Ctx() { prisma }: MyContext) {
    const currentUser = await prisma.user.findUnique({
      where: { id: root.id },
      select: {
        role: true,
      },
    });
    return currentUser?.role;
  }
}
