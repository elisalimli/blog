import { ObjectType, Field } from "type-graphql";
import { Post } from "../../../generated";

@ObjectType()
export class Tag {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class PostTags {
  @Field()
  id: string;

  @Field(() => Tag)
  tag: Tag;
}

@ObjectType()
export class PostEntity extends Post {
  @Field(() => [PostTags], {
    nullable: true,
  })
  tags?: PostTags[];
}
