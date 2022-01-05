import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringFilter | undefined;
    password?: StringFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    role?: EnumRoleFilter | undefined;
}
