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

/**
 * Search Type
 */
  searchType: SearchType;

  /**
   * search value populated by textbox
   */
  searchValue = '';

  /**
   * Search categories available
   */
  searchEnum = [];

  /**
   * books found using search parameters
   */
  foundBooks: Array<Book> = new Array<Book>();

  constructor(private bookService: BookService, private responseService: ResponseService) { }

  ngOnInit(): void {
    this.searchEnum = Object.keys(SearchType);
  }

   /**
    * @param {SearchType} value Selected type of search
    * Function to capture the search type as defined by the dropdown
    */
  changeSearchType(value): void{
    this.searchType = value;
  }

   /**
    * @param {string} value User input for search term
    * Function to capture the user input for the search term
    */
  captureSearchTerm(value): void {
    this.searchValue = value;
  }

  /**
   * Function to submit search upon input
   */
  submitSearch(): void {
    console.log(this.searchValue + this.searchType);
    if (this.searchType === undefined || this.searchValue === undefined || this.searchValue === ''){
      this.responseService.displayDialog(ResponseType.Unknown, 'You Must fill out both fields!');
    }
    else{
      this.getBooks();
    }
  }

   /**
    * Function that loads book dpeendant upon search parameters
    */
  private getBooks(): void {
    this.foundBooks = new Array<Book>();
    this.bookService.search(this.searchValue, this.searchType).subscribe((book) => {
      this.foundBooks.push(book);
    });
  }



}
