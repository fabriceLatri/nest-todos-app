import { todoStub } from '../test/stubs/todos.stub';

export const TodosService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(todoStub()),
  findAll: jest.fn().mockResolvedValue([todoStub()]),
  create: jest.fn().mockResolvedValue(todoStub()),
  update: jest.fn().mockResolvedValue(todoStub()),
  delete: jest.fn().mockResolvedValue(todoStub()),
});
