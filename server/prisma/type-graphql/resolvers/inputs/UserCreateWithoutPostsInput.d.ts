export declare class UserCreateWithoutPostsInput {
    id?: string | undefined;
    email: string;
    username: string;
    password: string;
    role?: "USER" | "AUTHOR" | "ADMIN" | undefined;
}
