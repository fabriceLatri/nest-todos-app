import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './schemas/TodoSchema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo | null> {
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo | string> {
    return this.todosService.create(createTodoDto);
  }

  @Put()
  updateTodo(
    @Body() todoData: { id: string; data: UpdateTodoDto },
  ): Promise<Todo | null> {
    return this.todosService.update(todoData.id, todoData.data);
  }

  @Delete()
  deleteTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todosService.delete(id);
  }
}
