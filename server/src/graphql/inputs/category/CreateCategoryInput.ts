import { Field, InputType } from "type-graphql";
import { GraphQLUpload, FileUpload } from "graphql-upload";

@InputType()
export class CreateCategoryInput {
  @Field()
  name!: string;

  @Field(() => GraphQLUpload, { nullable: true })
  file!: FileUpload;
}
