import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Event } from 'jquery';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;

    component.user = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have anon posting by default', () => {
    expect(component.anon).toBe(true);
  });

  it(`should have review variable populate upon keypress on input`, () => {
     component = fixture.componentInstance;
     spyOn(component, 'captureUserReview');

     const search = fixture.debugElement.nativeElement.querySelector(('#review'));

     search.value = 'test';
     const event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false, code: '65'
    });
     search.dispatchEvent(event);
     expect(component.captureUserReview).toHaveBeenCalledWith('test');
  });

  it('should have submitReview called when button is pressed', () => {
    spyOn(component, 'submitReview');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.submitReview).toHaveBeenCalled();
  });

  it('should have anon change when checkbox is pressed', () => {
    spyOn(component, 'anonReview');
    const button = fixture.debugElement.nativeElement.querySelector('input');
    button.click();
    fixture.detectChanges();
    expect(component.anonReview).toHaveBeenCalledWith(false);
  });
});
