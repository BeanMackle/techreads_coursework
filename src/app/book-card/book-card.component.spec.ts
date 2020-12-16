import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { BookCardComponent } from './book-card.component';
import { Book } from '../models';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;
  let book: Book;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {

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
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to book when "View" is pressed', () => {
    spyOn(component, 'viewBook');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.viewBook).toHaveBeenCalled();
  });
});
