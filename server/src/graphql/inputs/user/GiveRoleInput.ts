import { Field, InputType, Int } from "type-graphql";

@InputType()
export class GiveRoleInput {
  @Field(() => Int)
  value!: number;

  @Field()
  userId!: string;
}
