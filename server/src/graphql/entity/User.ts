import { ObjectType, Field } from "type-graphql";
import { Post, Tag } from "../../../generated";

@ObjectType()
export class UserEntity {
  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  email?: string;

  @Field()
  picture?: string;
}
