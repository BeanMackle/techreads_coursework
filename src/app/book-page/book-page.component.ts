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

/**
 * Book Page Component
 */
export class BookPageComponent implements OnInit {

  /**
   * Date user has read
   */
  dateRead: Date;

   /**
    * The Book to display
    */
    book: Book;


  /**
   * Boolean to determine if api data been loaded
   */
   loaded = false;



  /**
   * The id of the book
   */
   bookId: string;

  /**
 * Has User read the book
 */
  read = false;

  /**
 * formatted date to display if user has read the book
 */
  dateReadString: string;

  /**
   * The user currently viewing the page
   */
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

  /**
   * Function to get the user if they have an account
   */
  private getUser(): void {
    const user = this.userService.getUser();

    if (user === null){
      this.user = null;
    }
    else{
      this.user = user;
    }
  }

   /**
    * Function to get the book using the id present in the route
    */
 private getBook(): void{
   this.service.getBookById(this.bookId).subscribe((data: Book) => {
        this.book = data[0];
        this.loaded = true;
    });
  }

   /**
    * If user is present, Load their book history
    */
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


   /**
    * Capture date from date picker input
    * @param {Date} value Date Value
    */
  dateChange(value: Date): void{

    this.dateRead =  value;
  }

   /**
    * Adds this book to users reading history
    */
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
}
