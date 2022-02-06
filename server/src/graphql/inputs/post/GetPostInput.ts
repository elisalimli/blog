import { Field, InputType } from "type-graphql";

@InputType()
export class GetPostInput {
  @Field()
  postId!: string;
}
