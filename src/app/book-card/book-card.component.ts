import { Book } from './../models/book';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

/**
 * Book Card Component
 */
export class BookCardComponent implements OnInit {

/**
 * Book Input for displaying on card
 */
  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Function to redirect user to selected Book
   */
   viewBook(): void{
    this.router.navigateByUrl(`/book/${this.book.id}`);
  }
}
