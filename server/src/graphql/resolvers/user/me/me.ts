import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { UserEntity } from "../../../entity/User";

@Resolver(UserEntity)
export class MeResolver {
  @Query(() => UserEntity, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    const user = req?.user?._json as UserEntity;

    user?.id = req?.user?.id;
    if (!user?.id) return null;
    return user;
  }
}
