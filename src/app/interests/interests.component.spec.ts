import { User } from './../models/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { InterestsComponent } from './interests.component';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.user = {
      username: 'test',
      storedInterests: true,
      storedReads: false
    };

    component.userInterests = [{topic: 'js', user: 'test'}, {topic: 'css', user: 'test'}];
    component.categories = ['js', 'css', 'React', 'Angular'];
    component.readBooks = [ {
      id: '1',
      authors: ['Gavin'],
      title: 'The Angular Test Book',
      description: 'A big test',
      publisher: 'Test publisher',
      year: new Date(),
      isbn: '12345',
      image: 'imageUrl',
      category: 'Angular',
      ratings: [1, 1, 2, 2],
      reviews: [{review: 'get test', reviewer: 'Biggest Test fan'}]
    }];

    component.displayInterest = [{category: 'js', interest: true}, {category: 'css', interest: true},
    {category: 'React', interest: false}, {category: 'Angular', interest: true}];

    component.recommendations = [ {
      id: '2',
      authors: ['Gavin'],
      title: 'Making Angular Applications',
      description: 'Learn componenets and services',
      publisher: 'Test publisher',
      year: new Date(),
      isbn: '12345',
      image: 'imageUrl',
      category: 'Angular',
      ratings: [1, 1, 2, 2],
      reviews: [{review: 'get test', reviewer: 'Biggest Test fan'}]
    },
    {
      id: '3',
      authors: ['Gavin'],
      title: 'JS for dummies',
      description: 'A big test',
      publisher: 'Test publisher',
      year: new Date(),
      isbn: '12345',
      image: 'imageUrl',
      category: 'js',
      ratings: [1, 1, 2, 2],
      reviews: [{review: 'get test', reviewer: 'Biggest Test fan'}]
    }];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of displayInterests', () => {
    fixture.detectChanges();
    expect(component.displayInterest.length).toBe(4);
  });

  it('should call addNewInterests when user clicks checkbox', () => {
    fixture.detectChanges();
    spyOn(component, 'addNewInterests');
    const checkBoxes = fixture.debugElement.nativeElement.querySelectorAll('input');

    const checkbox = checkBoxes[2];
    console.log(checkbox);
    checkbox.click();

    expect(component.addNewInterests).toHaveBeenCalledWith(true, 'React');
  });

  it('should call submit interests when button is pressed', () => {
    spyOn(component, 'submitInterests');
    fixture.detectChanges();
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');

    const button = buttons[0];

    button.click();

    expect(component.submitInterests).toHaveBeenCalled();
  });
});
