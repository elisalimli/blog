import { ObjectType, Field } from "type-graphql";
import { Post, Tag } from "../../../generated";

@ObjectType()
export class PostEntity extends Post {
  @Field(() => [Tag], {
    nullable: true,
  })
  tags?: Tag[];
}
