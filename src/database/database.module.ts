import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
const AutoIncrementFactory = require('mongoose-sequence');
import { Todo } from 'src/todos/schemas/TodoSchema';
import { TodoSchema } from '../todos/schemas/TodoSchema';

const url = process.env.MONGO_URL || 'localhost';

console.log(url);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb://mongodb:27017', {
      user: 'root',
      pass: 'pass12345',
      dbName: 'todos',
      w: 'majority',
      retryWrites: true,
    }),
  ],
})
export class DatabaseModule {}
