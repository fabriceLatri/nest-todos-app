import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from '../schemas/TodoSchema';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { ITodosService } from '../ITodos.service';
import { TodoItem, TodoItems } from '../dto/todo.dto';

@Injectable()
export class TodosMongooseService implements ITodosService {
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<TodoItems> {
    return this.todoModel.find().exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<TodoItem | undefined> {
    const createdTodo = await this.todoModel.create(createTodoDto);

    return createdTodo ?? undefined;
  }

  async findOne(id: string): Promise<TodoItem | undefined> {
    const todo = await this.todoModel.findById(id);
    return todo ?? undefined;
  }

  async update(
    id: string,
    updateDotoDto: UpdateTodoDto
  ): Promise<Todo | undefined> {
    const todo = await this.todoModel.findByIdAndUpdate(id, updateDotoDto, {
      new: true,
    });
    return todo ?? undefined;
  }

  async delete(id: string): Promise<TodoItem | undefined> {
    return (await this.todoModel.findByIdAndDelete(id)) ?? undefined;
  }
}
