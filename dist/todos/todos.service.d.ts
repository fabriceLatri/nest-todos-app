import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/TodoSchema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    findAll(): Promise<Todo[]>;
    create(createTodoDto: CreateTodoDto): Promise<Todo | any>;
    findOne(id: string): Promise<Todo | null>;
    update(id: string, updateDotoDto: UpdateTodoDto): Promise<Todo | null>;
    delete(id: string): Promise<Todo | null>;
}
