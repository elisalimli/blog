import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    email: string;
    username: string;
    password?: string;
    posts?: Post[];
    role: "USER" | "AUTHOR" | "ADMIN";
    _count?: UserCount | null;
}
