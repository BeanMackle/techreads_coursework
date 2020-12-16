import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    const search = fixture.debugElement.nativeElement.querySelector(('#search'));

    search.value = 'test search';
  }));

  it('should create the app', () => {
    const fix = TestBed.createComponent(AppComponent);
    const app = fix.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ClientApp'`, () => {
    const app = fixture.componentInstance;

    expect(app.title).toEqual('ClientApp');
  });

  it(`should have search box to populate and pass over term upon keypress`, () => {
    const component = fixture.componentInstance;
    spyOn(component, 'change');

    const search = fixture.debugElement.nativeElement.querySelector(('#search'));

    search.value = 'test';
    const event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false,
    });
    search.dispatchEvent(event);
    expect(component.change).toHaveBeenCalledWith('test');
  });
});
