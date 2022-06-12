import { ReadStream } from "fs-capacitor";
import sharp from "sharp";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../../../../../generated";
import { MyContext } from "../../../../utils/MyContext";
import { CreateCategoryInput } from "../../../inputs/category/CreateCategoryInput";
import { isAuth } from "../../../middlewares/isAuth";
import { isAuthor } from "../../../middlewares/isAuthor";

// this is a utility function to promisify the stream and store the image in a buffer, which then is passed to sharp
const streamToString = (stream: ReadStream) => {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

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
    const file_name = `${uuidv4()}-${filename}`;
    const imagePath = __dirname + `/../../../../../images/${file_name}`;
    const image = await streamToString(createReadStream());

    const a = await sharp(image as any)
      .jpeg({ quality: 20 })
      .resize(600, 600)
      .toFile(imagePath);
    console.log(a);

    await prisma.category.create({ data: { name, pictureUrl: file_name } });
    return true;
  }
}
