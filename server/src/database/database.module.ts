import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { rootCertificates } from 'tls';

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
