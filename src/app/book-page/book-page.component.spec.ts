import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BookPageComponent } from './book-page.component';
import { of } from 'rxjs';

describe('BookPageComponent', () => {
  let component: BookPageComponent;
  let fixture: ComponentFixture<BookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPageComponent ],
      providers: [
          { provide: MatDialog, useValue: {}},
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          { provide: ActivatedRoute, useValue: { snapshot: {paramMap: convertToParamMap({id: 1})}}}
        ],
        imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPageComponent);
    component = fixture.componentInstance;

    component.user = {
      username: 'test',
      storedInterests: true,
      storedReads: true
    };

    component.read = false;
    component.book =  {
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
    component.loaded = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addToReadiongHistory when user presses button', () => {
    component.user = {
      username: 'test',
      storedInterests: true,
      storedReads: true
    };

    fixture.detectChanges();
    spyOn(component, 'addToReadingHistory');
    const search = fixture.debugElement.nativeElement.querySelector('button');
    search.click();
    console.log(search);
    fixture.detectChanges();
    expect(component.addToReadingHistory).toHaveBeenCalled();
  });
});
