import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/TodoSchema';
import { NewTodo } from './interfaces/NewTodo.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(newTodo: NewTodo): Promise<Todo> {
    const createdTodo = await this.todoModel.create(newTodo);
    return createdTodo;
  }

  async findOne(title: string): Promise<Todo | null> {
    const todo = await this.todoModel.findOne({ title });
    return todo;
  }
}
