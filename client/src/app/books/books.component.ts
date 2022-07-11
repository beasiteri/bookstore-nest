import { Component, ViewChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  entity: string;
  books: any;
  @ViewChild('bookId') bookId;
  @ViewChildren('bookTitle, bookWriter, bookDate', {read: ElementRef}) bookInfoReference: QueryList<ElementRef>;
  
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

  setEntity(event) {
    if (event.target.id === 'books') this.entity = 'books'; 
    else if (event.target.id === 'customers') this.entity = 'customers';
    else if (event.target.id === 'invoices') this.entity = 'invoices';
    else this.entity = 'none';
  }

  addBook(event) {
    event.preventDefault();
    /* const bookBody = this.bookInfoReference.map((result) => {
      return result.nativeElement.value;
    }); */
    const bookBody = [];
    this.bookInfoReference.forEach((result) => {
      result.nativeElement.id;
      result.nativeElement.value;
      bookBody.push(result.nativeElement.id);
    });
    this.service.createBook(bookBody);
  }
}
