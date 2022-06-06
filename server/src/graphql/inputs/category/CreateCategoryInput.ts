import { Field, InputType } from "type-graphql";
import { GraphQLUpload, FileUpload } from "graphql-upload";
import { IFile } from "../../../types/IFile";

@InputType()
export class CreateCategoryInput {
  @Field()
  name!: string;

  @Field(() => GraphQLUpload, { nullable: true })
  file!: FileUpload;
}
