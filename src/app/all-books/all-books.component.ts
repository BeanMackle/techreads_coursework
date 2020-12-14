import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books: Array<Book> = new Array<Book>();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
