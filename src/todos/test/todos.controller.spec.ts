import { Test, TestingModule } from '@nestjs/testing';
import { Todo } from '../schemas/TodoSchema';
import { TodosController } from '../todos.controller';

import { TodosService } from '../todos.service';
import { todoStub } from './stubs/todos.stub';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';

jest.mock('../todos.service.ts');

describe('TodosController', () => {
  let todosController: TodosController;
  let todosService: TodosService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    todosController = moduleRef.get<TodosController>(TodosController);
    todosService = moduleRef.get<TodosService>(TodosService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    describe('When findOne is called', () => {
      let todo: Todo | null;

      beforeEach(async () => {
        todo = await todosController.findOne(todoStub()._id);
      });

      it('then it should call todosService', () => {
        expect(todosService.findOne).toBeCalledWith(todoStub()._id);
      });

      it('then it should return a todo', () => {
        expect(todo).toEqual(todoStub());
      });
    });
  });

  describe('findAll', () => {
    describe('When findAll is called', () => {
      let todos: Todo[];

      beforeEach(async () => {
        todos = await todosController.findAll();
      });

      it('then it should call todosService', () => {
        expect(todosService.findAll).toHaveBeenCalled();
      });

      it('then it should return an array of todos', () => {
        expect(todos).toEqual([todoStub()]);
      });
    });
  });

  describe('createTodo', () => {
    describe('When createTodo is called', () => {
      let todo: Todo | string;
      let createTodoDto: CreateTodoDto;

      beforeEach(async () => {
        createTodoDto = {
          title: todoStub().title,
          description: todoStub().description,
          done: todoStub().done,
        };

        todo = await todosController.createTodo(createTodoDto);
      });

      it('then it should call todosService', () => {
        expect(todosService.create).toHaveBeenCalled();
      });

      it('then it should return the todo created', () => {
        expect(todo).toEqual(todoStub());
      });
    });
  });

  describe('updateTodo', () => {
    describe('When updateTodo is called', () => {
      let todo: Todo | null;
      let updateTodo: { id: string; data: UpdateTodoDto };

      beforeEach(async () => {
        updateTodo = {
          id: todoStub()._id,
          data: {
            done: true,
          },
        };

        todo = await todosController.updateTodo(updateTodo);
      });

      it('then it should call todosService', () => {
        expect(todosService.update).toBeCalledWith(
          updateTodo.id,
          updateTodo.data,
        );
      });

      it('then it should return the todo updated', () => {
        expect(todo).toEqual(todoStub());
      });
    });
  });

  describe('deleteTodo', () => {
    describe('When deleteTodo is called', () => {
      let todo: Todo | null;

      beforeEach(async () => {
        todo = await todosController.deleteTodo(todoStub()._id);
      });

      it('then it should call todosService', () => {
        expect(todosService.delete).toBeCalledWith(todoStub()._id);
      });

      it('then it should return the todo deleted', () => {
        expect(todo).toEqual(todoStub());
      });
    });
  });
});
