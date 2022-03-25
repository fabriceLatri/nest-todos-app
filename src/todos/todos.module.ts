import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/TodoSchema';
import { ITodosServiceToken } from './ITodos.service';
import { TodosMongooseService } from './repository/todos.mongoose.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [
    {
      provide: ITodosServiceToken,
      useClass: TodosMongooseService,
    },
  ],
})
export class TodosModule {}
