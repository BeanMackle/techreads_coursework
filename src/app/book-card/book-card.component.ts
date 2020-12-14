import { Book } from './../models/book';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   viewBook(id: number): void{
    this.router.navigateByUrl(`/book/${id.toString()}`);
  }
}
