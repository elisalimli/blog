import { Field, InputType, Int } from "type-graphql";

@InputType()
export class GetPostsBySearchInput {
  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;

  @Field(() => String, { nullable: true })
  query?: string;
}
