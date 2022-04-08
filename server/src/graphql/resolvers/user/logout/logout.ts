import { Ctx, Mutation, Resolver } from "type-graphql";
import { COOKIE_NAME } from "../../../../utils/constants";
import { MyContext } from "../../../../utils/MyContext";
import { User } from "../../../../../generated";

@Resolver(User)
export class LogoutResolver {
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err: Error) => {
        (res as any).clearCookie(COOKIE_NAME);
        req.logout();

        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
