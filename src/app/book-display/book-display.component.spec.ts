import { BookService } from './../services/book.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BookDisplayComponent } from './book-display.component';
import { COMPILER_OPTIONS } from '@angular/core';
import { Book } from '../models';
import { By } from '@angular/platform-browser';

describe('BookDisplayComponent', () => {
  let component: BookDisplayComponent;
  let fixture: ComponentFixture<BookDisplayComponent>;
  let book: Book;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDisplayComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisplayComponent);
    component = fixture.componentInstance;

    book =  {
      id: '1',
      authors: ['Gavin'],
      title: 'The Test Book',
      description: 'A big test',
      publisher: 'Test publisher',
      year: new Date(),
      isbn: '12345',
      image: 'imageUrl',
      category: 'Unit Testing',
      ratings: [1, 1, 2, 2],
      reviews: [{review: 'get test', reviewer: 'Biggest Test fan'}]
    };
    component.book = book;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('book values should have populated the page', () => {
      const title = fixture.debugElement.nativeElement.querySelector('h1');

      expect(title.innerHTML).toBe(book.title, 'Incorrect Book Title');
  });

  it('should navigate to book when "View" is pressed', () => {
    spyOn(component, 'viewBook');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.viewBook).toHaveBeenCalled();
  });
});
