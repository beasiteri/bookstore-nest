import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async createBook(bookDto: BookDto) {
    const newBook = await new this.bookModel(bookDto);
    return newBook.save();
  }

  async getAllBooks() {
    const allBooks = await this.bookModel.find().exec();

    if (!allBooks || allBooks.length == 0) {
      throw new Error('Books data not found!');
    }
    return allBooks;
  }

  async getBookById(id: string) {
    const bookById = await this.bookModel.findById(id).exec();

    if (!bookById) {
      throw new Error(`Book with ${id} not found!`);
    }
    return bookById;
  }

  async updateBook(id: string, bookDto: BookDto) {
    const bookById = await this.bookModel
      .findByIdAndUpdate(id, bookDto)
      .setOptions({ overwrite: true, new: true });

    if (!bookById) {
      throw new Error(`Book with ${id} not found!`);
    }
    return bookById;
  }

  async deleteBook(id: string) {
    const deletedBook = await this.bookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      throw new Error(`Book with ${id} not found!`);
    }
    return deletedBook;
  }
}
