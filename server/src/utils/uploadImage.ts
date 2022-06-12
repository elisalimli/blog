import { FileUpload } from "graphql-upload";
import sharp from "sharp";
import { FILE_EXTENSION } from "./constants";
import { streamToBuffer } from "./streamToBuffer";
import { v4 as uuidv4 } from "uuid";
export const uploadImage = async (file: FileUpload) => {
  const { createReadStream, filename } = await file;
  const fileNameWithoutExtension = filename.split(".")[0];
  const file_name = `${uuidv4()}-${fileNameWithoutExtension}`;

  const imagePath = __dirname + `/../../images/${file_name}.${FILE_EXTENSION}`;

  const image = await streamToBuffer(createReadStream());

  await sharp(image as any)
    .jpeg({ quality: 20 })
    .resize(600, 600)
    .toFile(imagePath);
  return file_name;
};
