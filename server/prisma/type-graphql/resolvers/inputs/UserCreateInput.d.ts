import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateInput {
    id?: string | undefined;
    email: string;
    username: string;
    password: string;
    role?: "USER" | "AUTHOR" | "ADMIN" | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
