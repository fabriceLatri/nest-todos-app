import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './schemas/TodoSchema';
import { NewTodo } from './interfaces/NewTodo.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':title')
  findOne(@Param('title') title: string): Promise<Todo | null> {
    return this.todosService.findOne(title);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo: NewTodo): Promise<Todo> {
    return this.todosService.create(newTodo);
  }
}
