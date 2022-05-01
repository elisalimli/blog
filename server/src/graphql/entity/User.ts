import { Role } from "@prisma/client";
import { Field, ObjectType } from "type-graphql";

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

  @Field()
  role?: Role;
}
