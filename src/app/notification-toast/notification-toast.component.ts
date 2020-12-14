import { ResponseType, Toast } from './../models/';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.css']
})
export class NotificationToastComponent implements OnInit {

  responseType: ResponseType;

  errorMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Toast) { }

  ngOnInit(): void {
    this.determineMessage();
  }

  determineMessage(): void{
    if (this.data.type === ResponseType.NotFound){
      this.showNotFoundMessage();
    } else if (this.data.type === ResponseType.Unknown){
        this.showUnknownError();
    } else if (this.data.type === ResponseType.Success){
        this.showSuccessMessage();
    } else if (this.data.type === ResponseType.Accepted){
      this.showAcceptedMessage();
    }
  }

  showNotFoundMessage(): void {
    if (this.data.message){
      this.errorMessage = this.data.message;
    }
    else{
    this.errorMessage = 'Resource Not Found! Please Try Again.';
    }
  }

  showUnknownError(): void {
    if (this.data.message){
      this.errorMessage = this.data.message;
    }
    else{
    this.errorMessage = 'Something Went Wrong! Please Trey Again!';
    }
  }

  showSuccessMessage(): void {
    if (this.data.message){
      this.errorMessage = this.data.message;
    }
    else{
    this.errorMessage = 'Great Success!';
    }
  }

  showAcceptedMessage(): void {
    if (this.data.message){
      this.errorMessage = this.data.message;
    }
    else{
    this.errorMessage = 'Great Success! Change has been accepted!';
    }
  }



}
