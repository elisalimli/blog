import { Stream } from "stream";

export interface IFile {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}
