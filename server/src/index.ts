import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./graphql/resolvers/hello";
import { RegisterResolver } from "./graphql/resolvers/user/register/register";
import expressPlayground from "graphql-playground-middleware-express";
import { redis } from "./utils/redis";
import { prisma } from "./utils/prisma";
import { MeResolver } from "./graphql/resolvers/user/me/me";
import { sessionMiddleware } from "./utils/sessionMiddleware";
import { LoginResolver } from "./graphql/resolvers/user/login/login";
import { LogoutResolver } from "./graphql/resolvers/user/logout/logout";
import { GiveRoleResolver } from "./graphql/resolvers/user/role/giveRole";

const PORT = process.env.PORT || 4000;

export const main: () => any = async () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000/",
      credentials: true,
    })
  );

  app.use(sessionMiddleware);
  //   for cookie
  //   app.set("trust proxy", 1);

  const schema = await buildSchema({
    resolvers: [
      // Mutations
      RegisterResolver,
      LoginResolver,
      LogoutResolver,
      GiveRoleResolver,
      //Queries
      HelloResolver,
      MeResolver,
    ],
    validate: false,
  });

  app.use(
    "/graphql",
    graphqlHTTP((req, res) => ({
      schema,
      graphiql: true,
      context: {
        req,
        res,
        prisma,
        redis,
      },
    }))
  );

  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
  app.listen(PORT);

  console.log(`🚀 Server ready at http://localhost:${PORT}`);
};

main().catch((err: any) => console.log(err));
