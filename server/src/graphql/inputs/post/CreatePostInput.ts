import { Field, InputType } from "type-graphql";
@InputType()
export class CreatePostInput {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field(() => String)
  url!: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isVideo?: boolean;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => String)
  categoryName!: string;
}
