import { Todo } from 'src/todos/schemas/TodoSchema';

export const todoStub = (): Todo => {
  return {
    _id: '6207f0798d7c56f90c343f49',
    done: false,
    description: 'Buy milk',
    title: 'milk',
  };
};
