import { TodosService } from './todos.service';
import { Todo } from './schemas/TodoSchema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findOne(id: string): Promise<Todo | null>;
    findAll(): Promise<Todo[]>;
    createTodo(createTodoDto: CreateTodoDto): Promise<Todo | string>;
    updateTodo(todoData: {
        id: string;
        data: UpdateTodoDto;
    }): Promise<Todo | null>;
    deleteTodo(id: string): Promise<Todo | null>;
}
