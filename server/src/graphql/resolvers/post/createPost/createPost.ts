import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { CreatePostInput } from "../../../inputs/post/CreatePostInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";

//UPDATE "user" SET role = 'ADMIN';
@Resolver(Post)
export class CreatePostResolver {
  @Mutation(() => Post)
  @UseMiddleware(isAuth, isAuthor)
  async createPost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: CreatePostInput
  ): Promise<Post> {
    const { tags, categoryName, ...rest } = input;
    const tagsArr: {
      tag: {
        connectOrCreate: { create: { name: string }; where: { name: string } };
      };
    }[] = [];
    // @todo maybe limit the number of tags to 3

    tags?.map((t) =>
      tagsArr.push({
        tag: {
          connectOrCreate: {
            create: {
              name: t,
            },
            where: {
              name: t,
            },
          },
        },
      })
    );

    const post = await prisma.post.create({
      data: {
        ...rest,
        // @todo prevent creating a new category when it doesn't exist
        categories: {
          create: {
            category: {
              connectOrCreate: {
                create: {
                  name: categoryName,
                  tags: {
                    create: tagsArr,
                  },
                },
                where: {
                  name: categoryName,
                },
              },
            },
          },
        },

        createdAt: new Date().toISOString(),
      },
    });
    return post;
  }
}
