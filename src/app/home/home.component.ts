import { ResponseType } from './../models/response-type';
import { ResponseService } from './../services/response.service';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredBooks: Array<Book>;


  constructor(private books: BookService, private responseService: ResponseService) { }

  ngOnInit(): void {
    this.featuredBooks = new Array<Book>();
    this.getBooks();
  }

  getBooks(): void {
    this.books.getAllBooks().subscribe((data: Array<Book>) => {
        if (data !== null || undefined){
          for (let i = 0; i < 4; i++) {
            this.featuredBooks.push(data[i]);
          }
        }
        else if (data === null || undefined) {
         this.responseService.displayDialog(ResponseType.Unknown, 'There was an error getting the books!');
        }
    });
  }

}
