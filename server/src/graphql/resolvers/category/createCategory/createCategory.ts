import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Category } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { CreateCategoryInput } from "../../../inputs/category/CreateCategoryInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";
import { v4 as uuidv4 } from "uuid";

import { createWriteStream } from "fs";
//UPDATE "user" SET role = 'ADMIN';
@Resolver(Category)
export class CreateCategoryResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth, isAuthor)
  async createCategory(
    @Ctx() { prisma }: MyContext,
    @Arg("input") { file, name }: CreateCategoryInput
  ): Promise<boolean> {
    const { createReadStream, filename } = await file;
    const file_name = `${uuidv4()}-${filename}`;
    const imagePath = __dirname + `/../../../../../images/${file_name}`;

    await new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(imagePath))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );

    await prisma.category.create({ data: { name, pictureUrl: file_name } });
    return true;
  }
}
