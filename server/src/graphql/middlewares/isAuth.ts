import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../../utils/MyContext";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  //@ts-ignore
  if (!context.req.user.id) throw new Error("Not authenticated");
  return next();
};
