import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRoleWithAggregatesFilter {
    equals?: "USER" | "AUTHOR" | "ADMIN" | undefined;
    in?: Array<"USER" | "AUTHOR" | "ADMIN"> | undefined;
    notIn?: Array<"USER" | "AUTHOR" | "ADMIN"> | undefined;
    not?: NestedEnumRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRoleFilter | undefined;
    _max?: NestedEnumRoleFilter | undefined;
}
