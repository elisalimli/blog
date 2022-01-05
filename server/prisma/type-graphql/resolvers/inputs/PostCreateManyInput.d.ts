export declare class PostCreateManyInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title: string;
    content: string;
    published?: boolean | undefined;
    authorId: string;
}
