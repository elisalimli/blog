import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../utils/MyContext";
import { User } from "../../../../../generated";

@Resolver(User)
export class MeResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req, prisma }: MyContext): Promise<any> | null {
    if (!req?.user?.id) return null;
    return req?.user;
  }
}
