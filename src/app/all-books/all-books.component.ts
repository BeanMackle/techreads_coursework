import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

/**
 * component for displaying all books
 */
export class AllBooksComponent implements OnInit {

/**
 * Found books
 */
  books: Array<Book> = new Array<Book>();

  constructor(private bookService: BookService) { }

   /**
    * Get Books upon page load
    */
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
