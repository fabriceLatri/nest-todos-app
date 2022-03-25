import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ITodosService, ITodosServiceToken } from './ITodos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoItems, TodoItem } from './dto/todo.dto';

@Controller('todos')
export class TodosController {
  constructor(
    @Inject(ITodosServiceToken) private readonly iTodosService: ITodosService
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoItem | undefined> {
    return this.iTodosService.findOne(id);
  }

  @Get()
  findAll(): Promise<TodoItems> {
    return this.iTodosService.findAll();
  }

  @Post()
  createTodo(
    @Body() createTodoDto: CreateTodoDto
  ): Promise<TodoItem | undefined> {
    return this.iTodosService.create(createTodoDto);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() todoData: { data: UpdateTodoDto }
  ): Promise<TodoItem | undefined> {
    return this.iTodosService.update(id, todoData.data);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<TodoItem | undefined> {
    return this.iTodosService.delete(id);
  }
}
