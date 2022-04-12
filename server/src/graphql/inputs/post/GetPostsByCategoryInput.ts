import { Field, InputType } from "type-graphql";

@InputType()
export class GetPostsByCategoryInput {
  @Field()
  categoryId?: string;
}
