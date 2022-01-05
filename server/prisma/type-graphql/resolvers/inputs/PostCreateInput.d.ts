import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title: string;
    content: string;
    published?: boolean | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
}
