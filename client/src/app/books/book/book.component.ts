import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookId: string;
  book;

  constructor(private service: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.id;
    this.service.getBookById(this.bookId)
    .subscribe(response => {
      const result = [response];
      this.book = result[0]['bookById'];
      console.log(this.book);
    });
  }
}
