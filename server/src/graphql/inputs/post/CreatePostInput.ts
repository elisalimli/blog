import { Field, InputType } from "type-graphql";
@InputType()
export class CreatePostInput {
  @Field()
  title!: string;
  // @todo add tags

  @Field(() => String)
  url!: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isVideo?: boolean;

  @Field(() => [String])
  tags?: string[];
}
