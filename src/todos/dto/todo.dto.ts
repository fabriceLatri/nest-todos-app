export interface TodoCreateRequest {
  title: string;
}

export interface TodoItem {
  completed: boolean;
  title: string;
  order: number;
  url: string;
}

export interface TodoUpdateRequest {
  completed?: boolean;
  title?: string;
  order?: number;
}

export type TodoItems = Array<TodoItem>;
