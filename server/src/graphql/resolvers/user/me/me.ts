import { Role } from "@prisma/client";
import { Ctx, FieldResolver, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { UserEntity } from "../../../entity/User";

@Resolver(UserEntity)
export class MeResolver {
  @Query(() => String, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    //@ts-ignore
    const user = req?.user?._json as UserEntity;
    //@ts-ignore
    user.id = req!.user!.id;
    if (!user?.id) return null;
    return user;
  }
  @FieldResolver()
  role() {
    // ...
    return Role.ADMIN;
  }
}
