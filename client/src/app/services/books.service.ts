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

  createBook(bookData) {
    return this.httpClient.post(`http://localhost:5000/books`, bookData);
  }

  deleteBook(id) {
    return this.httpClient.delete(`http://localhost:5000/books/${id}`);
  }
}
