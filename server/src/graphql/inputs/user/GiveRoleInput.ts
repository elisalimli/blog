import { Field, InputType } from "type-graphql";
import { Role } from "../../../../generated";

@InputType()
export class GiveRoleInput {
  @Field(() => String)
  role!: Role;

  @Field()
  userId!: string;
}
