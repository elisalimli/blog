import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "USER" | "AUTHOR" | "ADMIN" | undefined;
    in?: Array<"USER" | "AUTHOR" | "ADMIN"> | undefined;
    notIn?: Array<"USER" | "AUTHOR" | "ADMIN"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
