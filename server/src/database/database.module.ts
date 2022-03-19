import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || '', {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      dbName: 'todos',
      w: 'majority',
      retryWrites: true,
    }),
  ],
})
export class DatabaseModule {}
