import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdvancedSearchComponent } from './advanced-search.component';

describe('AdvancedSearchComponent', () => {
  let component: AdvancedSearchComponent;
  let fixture: ComponentFixture<AdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchComponent ],
      providers: [{provide: MatDialog, useValue: {}},  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }],
        imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeSearchType when dropdown option is selected', () => {
    spyOn(component, 'changeSearchType').and.callThrough();
    const e = fixture.debugElement.nativeElement.querySelectorAll('.option');
    e[0].click();
    fixture.detectChanges();
    expect(component.changeSearchType).toHaveBeenCalledWith('Title');
  });

  it(`should have search box to populate and pass over term upon keypress`, () => {

    spyOn(component, 'captureSearchTerm');

    const search = fixture.debugElement.nativeElement.querySelector(('#search'));

    search.value = 'test';
    const event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false,
    });
    search.dispatchEvent(event);
    expect(component.captureSearchTerm).toHaveBeenCalledWith('test');
  });

});
