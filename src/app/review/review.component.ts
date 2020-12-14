import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { ResponseService } from './../services/response.service';
import { Component, Input, OnInit } from '@angular/core';
import { ResponseType } from '../models';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  @Input() reviews: [];

  @Input() bookId: string;

  @Input() user: User;

  review: string;

  anon = true;

  constructor(private reviewService: ReviewService, private responseService: ResponseService, private userService: UserService) { }

  ngOnInit(): void {
  }

  submitReview(): void{
    if (this.review.length > 0){
    const review = document.getElementById('review');
    this.reviewService.submitReview(this.review, 'anon', this.bookId);

    let user;

    if (this.anon){
      user = 'anon';
    }
    else{
      user = this.user.username;
    }
    this.appendReview(this.review, user);
    }
    else  {
      this.responseService.displayDialog(ResponseType.Unknown, 'Please Enter Some text to submit a review!');
    }
  }
  anonReview(event): void{
    this.anon = event.target.checked;
  }

  captureUserReview(value: string): void {
    this.review = value;
  }
  appendReview(review: string, reviewer: string): void{


    const elements = '<div class="text-left border border-primary" style="margin-top: 1%;"><h3> Reviewer: ' + reviewer +
    '</h3><p>' + review + '</p></div>';

    const reviews = document.getElementById('reviews');

    reviews.insertAdjacentHTML('afterbegin', elements);

  }

}
