import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By, EventManager } from '@angular/platform-browser';

import { RatingsComponent } from './ratings.component';

describe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    component.ratings = [1, 1, 2, 2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct rating distributions', () => {
    expect(component.ratingDistribution[0].percentage).toBe('50');
    expect(component.ratingDistribution[1].percentage).toBe('50');
  });

  it('should have the correct average rating', () => {
      expect(component.averageRating).toBe('30');
  });

  it('should have the correct number of total ratings', () => {
    expect(component.totalRatings).toBe(4);
  });

  it('should have correct message on dropdown', () => {
       const selected = fixture.debugElement.query(By.css('.selected'));
       expect(selected.nativeElement.innerText.trim()).toBe('Choose A Rating');
  });

  it('should call captureRating when dropdown value is clicked with correct value', () => {
    spyOn(component, 'captureRating').and.callThrough();
    const e = fixture.debugElement.nativeElement.querySelectorAll('.option');
    e[0].click();
    fixture.detectChanges();
    expect(component.captureRating).toHaveBeenCalledWith('1');
  });
});
