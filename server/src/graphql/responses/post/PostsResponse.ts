import { Field, ObjectType } from "type-graphql";
import { PostEntity } from "../../entitites/Post";

@ObjectType()
export class PostsResponse {
  @Field(() => [PostEntity], { nullable: true })
  posts?: PostEntity[];

  @Field(() => Boolean)
  hasMore?: boolean;
}
