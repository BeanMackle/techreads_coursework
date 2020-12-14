import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  @Input() book: Book;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewBook(): void {
    this.router.navigateByUrl(`/book/${this.book.id.toString()}`);
  }

}
