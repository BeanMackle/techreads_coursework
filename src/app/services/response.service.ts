import { ResponseType } from './../models/response-type';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationToastComponent } from '../notification-toast/notification-toast.component';
import { finalize } from 'rxjs/operators';
import { Toast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private openDialog: MatDialogRef<NotificationToastComponent>;

  constructor(private dialog: MatDialog) {}



  displayDialog(response: ResponseType, message: string): void {
    const toast: Toast = {
      type: response,
      message
  };
    if (this.openDialog === undefined || this.openDialog.getState() === 2){
      if (this.openDialog){
      this.openDialog.close();
      this.openDialog = undefined;
      }
      this.openDialog = this.dialog.open(NotificationToastComponent, {
    data:  toast
  });
  }
}
}
