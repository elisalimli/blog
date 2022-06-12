import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { CreatePostInput } from "../../../inputs/post/CreatePostInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";
import * as yup from "yup";
import { CreatePostResponse } from "../../../responses/post/CreatePostResponse";
import { formatYupError } from "../../../../utils/formatYupError";

//UPDATE "user" SET role = 'ADMIN';
const registerError = {
  shortTitle: "must be greater than 2 characters",
  longTitle: "must be less than 128 characters",
  invalidUrl: "invalid youtube video url",
  shortTag: "must be greater than 2 characters",
  longTag: "must be less than 24 characters",
};

export const registerSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, registerError.shortTitle)
    .max(128, registerError.longTitle)
    .required(),
  description: yup.string().required(),
  url: yup
    .string()
    .matches(/youtube\.com.*(\?v=|\/embed\/)(.{11})/, registerError.invalidUrl)
    .required(),
  tags: yup
    .array()
    .max(3, "exceed tags size(max tag size is 3)")
    .of(
      yup
        .string()
        .min(2, registerError.shortTag)
        .max(24, registerError.longTag)
        .required()
    ),
  categoryName: yup
    .string()
    .min(2, registerError.shortTag)
    .max(24, registerError.longTag)
    .required(),
});
@Resolver(Post)
export class CreatePostResolver {
  @Mutation(() => CreatePostResponse)
  @UseMiddleware(isAuth, isAuthor)
  async createPost(
    @Ctx() { prisma }: MyContext,
    @Arg("input") input: CreatePostInput
  ): Promise<CreatePostResponse> {
    const { tags, categoryName, ...rest } = input;

    //validation
    try {
      await registerSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        ok: false,
        errors: formatYupError(err),
      };
    }
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
      },
    });
    return {
      ok: true,
      post,
    };
  }
}
