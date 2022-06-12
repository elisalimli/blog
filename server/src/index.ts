import cors from "cors";
import dayjs from "dayjs";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLScalarType, Kind } from "graphql";
import expressPlayground from "graphql-playground-middleware-express";
import { graphqlUploadExpress } from "graphql-upload";
import passport from "passport";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { CreateCategoryResolver } from "./graphql/resolvers/category/createCategory/createCategory";
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
import { DateTimeResolver } from "graphql-scalars";

const PORT = process.env.PORT || 4000;

export const main: () => any = async () => {
  const app = express();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  app.use(
    cors({
      origin: process.env.WEB_URL,
      credentials: true,
    })
  );

  //   for cookie(production)
  app.set("trust proxy", 1);

  app.use(sessionMiddleware);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(router);
  console.log(__dirname + "../");

  // serving images in the following path
  // ... + /dist/../
  app.use(express.static(__dirname + "/../"));

  const schema = await buildSchema({
    resolvers: [
      // Mutations
      LogoutResolver,
      GiveRoleResolver,
      CreatePostResolver,
      CreateCategoryResolver,
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

    // for handling dates in graphql
    scalarsMap: [{ type: Date, scalar: DateTimeResolver }],

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
