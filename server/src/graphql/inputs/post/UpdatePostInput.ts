import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePostInput {
  @Field()
  postId!: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  published?: boolean;
}
