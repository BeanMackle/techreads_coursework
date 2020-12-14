import { ResponseService } from './../services/response.service';
import { BookService } from './../services/book.service';
import { SearchType } from './../models/search-type';
import { Component, OnInit } from '@angular/core';
import { Book, ResponseType } from '../models';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  searchType: SearchType;
  searchValue = '';
  searchEnum = [];
  foundBooks: Array<Book> = new Array<Book>();

  constructor(private bookService: BookService, private responseService: ResponseService) { }

  ngOnInit(): void {
    this.searchEnum = Object.keys(SearchType);
  }

  changeSearchType(value): void{
    this.searchType = value;
  }

  captureSearchTerm(value): void {
    this.searchValue = value;
  }

  submitSearch(): void {
    if (this.searchType === undefined || this.searchValue === undefined || this.searchValue === ''){
      this.responseService.displayDialog(ResponseType.Unknown, 'You Must fill out both fields!');
    }
    else{
      this.getBooks();
    }
  }

  private getBooks(): void {
    this.foundBooks = new Array<Book>();
    this.bookService.search(this.searchValue, this.searchType).subscribe((book) => {
      this.foundBooks.push(book);
    });
  }



}
