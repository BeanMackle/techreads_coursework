import { ResponseType } from './../models/response-type';
import { ResponseService } from './../services/response.service';
import { UserService } from './../services/user.service';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book, DisplayInterests, Interest, User } from '../models';
import { buildInterests } from '../models/interests-helper';
import { getReccomendations } from '../models/recommendations-helper';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  userInterests: Array<Interest> = new Array<Interest>();
  categories: Array<string> = new Array<string>();
  displayInterest: Array<DisplayInterests> = new Array<DisplayInterests>();
  InterestsToAdd: Array<Interest> = new Array<Interest>();
  readBooks: Array<Book> = new Array<Book>();
  user: User;

  recommendations: Array<Book> = new Array<Book>();

  constructor(private bookService: BookService, private userService: UserService, private responseService: ResponseService) {
    this.displayInterest = new Array<DisplayInterests>();
   }

  ngOnInit(): void {
    this.displayInterest = new Array<DisplayInterests>();
    this.loadUserInterests();
    this.loadReadBooks();
    this.loadReccomendations();


  }

  checkInterestLength(): void {
    if (this.displayInterest.length > 7){
      this.displayInterest = this.displayInterest.splice(0, 7);
    }
  }

  checkUserExists(): boolean {
    this.user = this.userService.getUser();

    if (this.user === undefined || this.user === null){
      return false;
    }
    return true;
  }

  loadReccomendations(): void {
    if (this.checkUserExists() && this.user.storedInterests && this.user.storedReads){
      this.bookService.getAllBooks().subscribe((books) => {
          this.userService.getUserInterests().subscribe((interests) => {
              this.userService.getUserHistory().subscribe((history) => {
                 this.recommendations = getReccomendations(books, interests, history);
              });
          });
      });
    }
  }

  loadBookCategories(): void{
    this.bookService.getBookCategories().subscribe((data) => {
        if (data !== null || data !== undefined){
            this.categories = data;
            if (this.checkUserExists() && this.user.storedInterests === false){
              this.displayInterest = buildInterests(undefined, this.categories);
            }
        }
    });
  }

  loadUserInterests(): void{
    this.loadBookCategories();

    if (this.checkUserExists() && this.user.storedInterests === true){
    this.userService.getUserInterests().subscribe((data) => {
      if (data !== null || data !== undefined){
        this.userInterests = data;
        this.displayInterest = new Array<DisplayInterests>();
        this.displayInterest = buildInterests(this.userInterests, this.categories);
        this.checkInterestLength();
       }
    });
  }
}

  loadReadBooks(): void{
    if (this.checkUserExists() && this.user.storedReads === true){
    this.userService.getUserHistory().subscribe((data) => {
      data.forEach((history) => {
        this.bookService.getBookById(history.book).subscribe((book) => {
          this.readBooks.push(book[0]);
        });
      });
    });
  }
 }

  addNewInterests(event, interest: string): void {
    if  (event.target.checked){
        const newInterest: Interest = {
          topic: interest,
          user: this.userService.getUser().username,
        };

        this.InterestsToAdd.push(newInterest);
    }
    else if (!event.checked){
      this.InterestsToAdd = this.InterestsToAdd.filter(x => x.topic !== interest);
    }
  }

  submitInterests(): void{
    if  (this.InterestsToAdd.length > 0){
      this.InterestsToAdd.forEach((interest) => {
        this.userService.postUserInterest(interest).subscribe(() => {
          const el = document.getElementById(interest.topic) as any;
          el.disabled = true;
          this.user.storedInterests = true;
          this.userService.setUser(this.user);
        });
      });

      this.responseService.displayDialog(ResponseType.Success, 'New Interests Added!');
    }
  }
}
