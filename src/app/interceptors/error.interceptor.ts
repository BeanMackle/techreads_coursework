import { ResponseService } from './../services/response.service';
import { ResponseType, Toast } from './../models';
import { NotificationToastComponent } from './../notification-toast/notification-toast.component';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  /**
   *
   */
  constructor(private responseService: ResponseService) {}

  /**
   * Shows error dialog for any http response that cointains an error status code
   * @param {HttpRequest<any>} request  The http request
   * @param {HttpHandler} next  The http handler
   * @returns Observable
   */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 404) {

              this.responseService.displayDialog(ResponseType.NotFound, 'No Resource(s) Found!');
            }
            else{
              this.responseService.displayDialog(ResponseType.Unknown, 'An Error Has Occured! Please Try Again');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
