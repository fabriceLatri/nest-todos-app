"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const todos_stub_1 = require("../test/stubs/todos.stub");
exports.TodosService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockResolvedValue((0, todos_stub_1.todoStub)()),
    findAll: jest.fn().mockResolvedValue([(0, todos_stub_1.todoStub)()]),
    create: jest.fn().mockResolvedValue((0, todos_stub_1.todoStub)()),
    update: jest.fn().mockResolvedValue((0, todos_stub_1.todoStub)()),
    delete: jest.fn().mockResolvedValue((0, todos_stub_1.todoStub)()),
});
//# sourceMappingURL=todos.service.js.map