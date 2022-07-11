import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Res() response, @Body() bookDto: BookDto) {
    try {
      const newBook = await this.booksService.createBook(bookDto);
      return response.status(HttpStatus.CREATED).json({
        newBook,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Book not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getAllBooks(@Res() response) {
    try {
      const booksData = await this.booksService.getAllBooks();
      return response.status(HttpStatus.OK).json({
        booksData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getBookById(@Res() response, @Param('id') id: string) {
    try {
      const bookById = await this.booksService.getBookById(id);
      return response.status(HttpStatus.OK).json({
        bookById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch('/:id')
  async updateBook(
    @Res() response,
    @Param('id') id: string,
    @Body() bookDto: BookDto,
  ) {
    try {
      const bookById = await this.booksService.updateBook(id, bookDto);
      return response.status(HttpStatus.OK).json({
        bookById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteBook(@Res() response, @Param('id') id: string) {
    try {
      const deleteBook = await this.booksService.deleteBook(id);
      return response.status(HttpStatus.OK).json({
        deleteBook,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
