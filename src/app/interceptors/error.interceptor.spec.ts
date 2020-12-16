import { TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { throwError } from 'rxjs';

import { ErrorInterceptor } from './error.interceptor';

let interceptor: ErrorInterceptor;
let badresponse;
describe('ErrorInterceptor', () => {
  beforeEach(() => {TestBed.configureTestingModule({
      providers: [ErrorInterceptor,
        {provide: MatDialog, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    });

                    badresponse = jasmine.createSpyObj('BookService', ['getAllBooks']);
                    interceptor = new ErrorInterceptor(badresponse);
 }


      );

  it('should be created', () => {
     interceptor = TestBed.inject(ErrorInterceptor);
     expect(interceptor).toBeTruthy();
  });

  describe('intercept', () => {
    let httpRequestSpy;
    let httpHandlerSpy;
    const error = {status: 401, statusText: 'error'};

    it('should try to display the dialog', () => {

        httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
        httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
        httpHandlerSpy.handle.and.returnValue(throwError(
            {error:
                {message: 'test-error'}
            }
        ));

        interceptor.intercept(httpRequestSpy, httpHandlerSpy)
            .subscribe(
                result => console.log('good', result),
                err => {

                    expect(err.toString()).toEqual('TypeError: this.responseService.displayDialog is not a function');
                }
            );
    });
});
});
