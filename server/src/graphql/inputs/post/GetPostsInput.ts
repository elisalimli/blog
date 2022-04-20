import { Field, InputType, Int } from "type-graphql";

@InputType()
export class GetPostsInput {
  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}
