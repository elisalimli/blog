import { Field, ObjectType } from "type-graphql";
import { Post } from "../../../../generated";
import { OkResponse } from "../OkResponse";

@ObjectType()
export class CreatePostResponse extends OkResponse {
  @Field(() => Post, { nullable: true })
  post?: Post;
}
