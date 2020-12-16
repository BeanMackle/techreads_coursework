import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookService } from '../services/book.service';

import { HomeComponent } from './home.component';
import SpyObj = jasmine.SpyObj;


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // tslint:disable-next-line: prefer-const
  let bookService: SpyObj<BookService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [HomeComponent],
    providers: [
       { provide: BookService, useValue: bookService},
        {provide: MatDialog, useValue: {}},
       { provide: MAT_DIALOG_DATA, useValue: {} },
       { provide: MatDialogRef, useValue: {} } ],
    imports: [HttpClientTestingModule]

  });
  fixture = TestBed.createComponent(HomeComponent);
  component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
