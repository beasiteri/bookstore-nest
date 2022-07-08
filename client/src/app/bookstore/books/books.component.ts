import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  @ViewChild('bookId') bookId;

  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.service.getAllBooks()
    .subscribe(response => {
      const result = [response];
      this.books = result[0]['booksData'];
    });
  }

  deleteBook(bookId) {
    this.service.deleteBook(bookId.innerText)
    .subscribe(() => {
      bookId.closest('.entity-content').remove();
    });
  }
}
