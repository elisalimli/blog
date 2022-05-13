import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import passport from "passport";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { GetCategoriesResolver } from "./graphql/resolvers/category/getAllCategories/getCategories";
import { HelloResolver } from "./graphql/resolvers/hello";
import { CreatePostResolver } from "./graphql/resolvers/post/createPost/createPost";
import { GetPostResolver } from "./graphql/resolvers/post/getPost/getPost";
import { GetLatestPostsResolver } from "./graphql/resolvers/post/getPosts/getLatestPosts";
import { GetPostsResolver } from "./graphql/resolvers/post/getPosts/getPosts";
import { GetPostsBySearchResolver } from "./graphql/resolvers/post/getPostsBySearch/getPostsBySearch";
import { GetTagsResolver } from "./graphql/resolvers/tags/getTags/tags";
import { LogoutResolver } from "./graphql/resolvers/user/logout/logout";
import { MeResolver } from "./graphql/resolvers/user/me/me";
import { GiveRoleResolver } from "./graphql/resolvers/user/role/giveRole";
import router from "./utils/passportAuth";
import { prisma } from "./utils/prisma";
import { redis } from "./utils/redis";
import { sessionMiddleware } from "./utils/sessionMiddleware";

const PORT = process.env.PORT || 4000;

export const main: () => any = async () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(sessionMiddleware);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(router);
  //   for cookie
  //   app.set("trust proxy", 1);

  const schema = await buildSchema({
    resolvers: [
      // Mutations
      LogoutResolver,
      GiveRoleResolver,
      CreatePostResolver,
      //Queries
      GetLatestPostsResolver,
      GetPostsBySearchResolver,
      GetPostsResolver,
      GetPostResolver,
      GetCategoriesResolver,
      GetTagsResolver,
      MeResolver,
      HelloResolver,
    ],
    validate: false,
  });
  // app.use(auth);
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
