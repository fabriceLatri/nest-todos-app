import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoItem } from '../dto/todo.dto';

export type TodoDocument = Todo & Document;

@Schema({
  toJSON: {
    getters: true,
  },
})
export class Todo implements TodoItem {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  url: string;

  @Prop({
    required: false,
    default: false,
  })
  completed: boolean;

  @Prop()
  order: number;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
