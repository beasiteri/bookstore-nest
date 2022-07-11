import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get('/books');
  }

  createBook(bookData) {
    return this.httpClient.post(`/books`, bookData);
  }

  deleteBook(id) {
    return this.httpClient.delete(`/books/${id}`);
  }
}
