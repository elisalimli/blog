import { Field, InputType } from "type-graphql";

@InputType()
export class GetPostsByTagInput {
  @Field()
  tagId!: string;
}
