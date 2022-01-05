import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    role?: "asc" | "desc" | undefined;
}
