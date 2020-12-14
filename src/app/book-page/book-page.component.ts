import { ResponseService } from './../services/response.service';
import { UserService } from './../services/user.service';
import { ReviewService } from './../services/review.service';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, History, ResponseType, User } from '../models';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  dateRead: Date;

  book: Book;

  averageRating: string;

  loaded = false;

  bookId: string;

  read = false;

  review: string;

  dateReadString: string;

  user: User;

  /**
   * constructor
   */
  constructor(private route: ActivatedRoute, private service: BookService, private reviewService: ReviewService,
              private userService: UserService, private responseService: ResponseService) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.getUser();
    this.getBook();
    this.getUserHistory();

  }

  private getUser(): void {
    const user = this.userService.getUser();

    if (user === null){
      this.user = null;
    }
    else{
      this.user = user;
    }
  }

 private getBook(): void{
   this.service.getBookById(this.bookId).subscribe((data: Book) => {
        this.book = data[0];
        this.loaded = true;
    });
  }

  getUserHistory(): void{
    if (this.user && this.user.storedReads){
    this.userService.getUserHistory().subscribe((data) => {
        const filtered = data.filter(x => x.book === this.bookId);
        if (filtered.length > 0){
          this.read = true;
          const date = filtered[0].date;
          this.dateReadString =  new Date(date).toDateString();
        }
    });
  }
  }


  dateChange(value: Date): void{

    this.dateRead =  value;
  }

  addToReadingHistory(): void{


    if (this.dateRead !== undefined){
    const history: History = {
     user: this.userService.getUser().username,
     book: this.bookId,
     date: this.dateRead,
    };



    this.userService.postUserHistory(history).subscribe((data) => {
      this.dateReadString =  new Date(history.date).toDateString();
      this.read = true;
      const user = this.userService.getUser();
      user.storedReads = true;
      this.userService.setUser(user);
   });
  }
  else{
    this.responseService.displayDialog(ResponseType.NotFound, 'You must enter a date!');
  }

  }

  submitReview(): void{
    if (this.review.length > 0){
    const review = document.getElementById('review');
    this.reviewService.submitReview(this.review, 'anon', this.bookId);
    this.appendReview(this.review, 'anon');
    }
    else  {
      this.responseService.displayDialog(ResponseType.Unknown, 'Please Enter Some text to submit a review!');
    }
  }

  captureUserReview(value: string): void {
    this.review = value;
  }
  appendReview(review: string, reviewer: string): void{

    const elements = '<div class="text-left border border-primary" style="margin-top: 1%;"><h3>' + reviewer + '</h3><p>' + review + '</p></div>';

    const reviews = document.getElementById('reviews');

    reviews.insertAdjacentHTML('afterbegin', elements);

  }
}
