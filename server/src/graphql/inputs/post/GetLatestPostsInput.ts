import { Field, InputType, Int } from "type-graphql";

@InputType()
export class GetLatestPostsInput {
  @Field(() => Int, { nullable: true })
  limit?: number;
}
