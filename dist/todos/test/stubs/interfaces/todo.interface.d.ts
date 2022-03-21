export interface TodoInterface {
    readonly _id: string;
    readonly title: string;
    readonly description?: string;
    readonly done: boolean;
}
