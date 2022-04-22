import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../../utils/MyContext";

export const isAdmin: MiddlewareFn<MyContext> = async (
  { context: { prisma, req } },
  next
) => {
  const { userId } = req.session;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
    },
  });

  if (user && user.role != "ADMIN") throw new Error("Not authenticated(admin)");

  return next();
};
