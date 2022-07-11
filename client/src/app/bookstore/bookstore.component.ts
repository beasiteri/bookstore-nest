import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent {
  entity: string;
  @ViewChildren('bookTitle, bookWriter, bookDate', {read: ElementRef}) bookInfoReference: QueryList<ElementRef>;
  
  constructor(private service: BooksService) { }

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
