import { ReadStream } from "fs-capacitor";

// this is a utility function to promisify the stream and store the image in a buffer, which then is passed to sharp
export const streamToBuffer = (stream: ReadStream) => {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};
