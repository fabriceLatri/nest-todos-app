import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/TodoSchema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo | any> {
    try {
      const createdTodo = await this.todoModel.create(createTodoDto);

      return createdTodo;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string): Promise<Todo | null> {
    const todo = await this.todoModel.findById(id);
    return todo;
  }

  async update(id: string, updateDotoDto: UpdateTodoDto): Promise<Todo | null> {
    const todo = await this.todoModel.findByIdAndUpdate(id, updateDotoDto, {
      new: true,
    });
    return todo;
  }

  async delete(id: string): Promise<Todo | null> {
    const todo = await this.todoModel.findByIdAndDelete(id);
    return todo;
  }
}
