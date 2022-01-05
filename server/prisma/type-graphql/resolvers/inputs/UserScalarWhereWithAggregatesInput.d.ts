import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    role?: EnumRoleWithAggregatesFilter | undefined;
}
