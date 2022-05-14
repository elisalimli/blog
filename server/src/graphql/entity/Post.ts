import { ObjectType, Field } from "type-graphql";
import { Category, Post, Tag } from "../../../generated";

@ObjectType()
export class PostEntity extends Post {
  @Field(() => [Tag], {
    nullable: true,
  })
  tags?: Tag[];
  @Field(() => Category, {
    nullable: true,
  })
  category?: Category;
}
