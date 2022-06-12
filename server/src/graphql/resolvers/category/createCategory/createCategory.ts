import sharp from "sharp";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../../../../../generated";
import { FILE_EXTENSION } from "../../../../utils/constants";
import { MyContext } from "../../../../utils/MyContext";
import { streamToBuffer } from "../../../../utils/streamToBuffer";
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
    console.log("file", file);
    const { createReadStream, filename } = await file;
    const fileNameWithoutExtension = filename.split(".")[0];
    const file_name = `${uuidv4()}-${fileNameWithoutExtension}`;

    const imagePath =
      __dirname + `/../../../../../images/${file_name}.${FILE_EXTENSION}`;

    const image = await streamToBuffer(createReadStream());

    const a = await sharp(image as any)
      .jpeg({ quality: 20 })
      .resize(600, 600)
      .toFile(imagePath);
    console.log(a);

    await prisma.category.create({ data: { name, pictureUrl: file_name } });
    return true;
  }
}
