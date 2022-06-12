import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Category } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { uploadImage } from "../../../../utils/uploadImage";
import { CreateCategoryInput } from "../../../inputs/category/CreateCategoryInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";

//UPDATE "user" SET role = 'ADMIN';
@Resolver(Category)
export class CreateCategoryResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth, isAuthor)
  async createCategory(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { file, name }: CreateCategoryInput
  ): Promise<boolean> {
    const file_name = await uploadImage(file);

    await prisma.category.create({ data: { name, pictureUrl: file_name } });
    return true;
  }
}
