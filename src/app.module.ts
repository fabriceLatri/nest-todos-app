import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb+srv://portfoliodb.sxgmw.mongodb.net', {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      dbName: 'todos',
      w: 'majority',
      retryWrites: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
