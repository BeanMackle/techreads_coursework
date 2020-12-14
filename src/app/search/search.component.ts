import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, SearchType } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  foundBooks: Array<Book> = new Array<Book>();

  constructor(private route: ActivatedRoute, private books: BookService) { }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.paramMap.get('term');

    this.findBooks();
  }

  findBooks(): void {
    this.foundBooks = new Array<Book>();
    this.books.search(this.searchTerm, SearchType.Title).subscribe((data: Book) => {
      this.foundBooks.push(data);
  });
  }

  search(newTerm: string): void {
    this.searchTerm = newTerm;

    this.findBooks();
  }


}
