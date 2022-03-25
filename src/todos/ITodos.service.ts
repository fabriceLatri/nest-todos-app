import {
  TodoCreateRequest,
  TodoItems,
  TodoItem,
  TodoUpdateRequest,
} from './dto/todo.dto';

export const ITodosServiceToken = 'ITodosServiceToken';

export interface ITodosService {
  findAll(): Promise<TodoItems>;

  create(todoCreateRequest: TodoCreateRequest): Promise<TodoItem | undefined>;

  findOne(id: string): Promise<TodoItem | undefined>;

  update(
    id: string,
    todoUpdateRequest: TodoUpdateRequest
  ): Promise<TodoItem | undefined>;

  delete(id: string): Promise<TodoItem | undefined>;
}
