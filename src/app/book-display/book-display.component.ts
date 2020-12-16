import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})

/**
 * Displays book component for search results
 */
export class BookDisplayComponent implements OnInit {

   /**
   * @param {Book} book  The Book to Display
   * Displays a book
   */
  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Function to redirect User to view Selected Book
   */
  viewBook(): void {
    this.router.navigateByUrl(`/book/${this.book.id.toString()}`);
  }

}
