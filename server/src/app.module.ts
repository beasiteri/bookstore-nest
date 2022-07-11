import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { CustomersModule } from './customers/customers.module';
import { EventsModule } from './events/events.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/library'),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'bea',
      password: 'Localhost22!',
      database: 'library',
      entities: [Event],
      synchronize: true,
      dropSchema: false,
    }),
    BooksModule,
    CustomersModule,
    EventsModule,
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
