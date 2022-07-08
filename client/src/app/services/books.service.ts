import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get('http://localhost:5000/books');
  }

  createBook(bookBody) {
    return this.httpClient.post(`http://localhost:5000/books`, {
      title: bookBody.title,
      writer: bookBody.writer,
      publish_date: bookBody.publish_date
    });
  }

  deleteBook(id) {
    return this.httpClient.delete(`http://localhost:5000/books/${id}`);
  }
}
