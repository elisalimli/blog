export declare class UserCreateManyInput {
    id?: string | undefined;
    email: string;
    username: string;
    password: string;
    role?: "USER" | "AUTHOR" | "ADMIN" | undefined;
}
