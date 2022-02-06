import { Field, ObjectType } from "type-graphql";
import { Post } from "../../../../generated";

@ObjectType()
export class PostsResponse {
  @Field(() => [Post], { nullable: true })
  posts?: Post[];
  @Field(() => Boolean)
  hasMore?: boolean;
}
