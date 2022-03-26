import { Field, ObjectType } from "type-graphql";
import { PostEntity } from "../../entity/Post";

@ObjectType()
export class PostsResponse {
  @Field(() => [PostEntity], { nullable: true })
  posts?: PostEntity[];

  @Field(() => Boolean)
  hasMore?: boolean;
}
