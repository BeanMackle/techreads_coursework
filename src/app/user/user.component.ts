import { ResponseService } from './../services/response.service';
import { User } from './../models/user';
import { DisplayInterests } from './../models/display-interests';
import { BookService } from './../services/book.service';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Interest, ResponseType } from '../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  foundUser: User;
  interests: Array<DisplayInterests> = new Array<DisplayInterests>();

  newUser = '';

  interestsToAdd: Array<Interest> = new Array<Interest>();

  constructor(private userService: UserService, private bookService: BookService,
              private router: Router, private responseService: ResponseService) { }

  ngOnInit(): void {
    this.foundUser = this.userService.getUser();
    this.setUpInterests();
  }

  setUpInterests(): void{
   this.bookService.getBookCategories().subscribe((data) => {
        data.forEach((cateogry) => {
          const interest: DisplayInterests = {
              category: cateogry,
              interest: false
          };

          this.interests.push(interest);
        });
    });
  }

  addNewInterests(event, interest: string): void {
    if  (event.target.checked){
        const newInterest: Interest = {
          topic: interest,
          user: this.newUser,
        };

        this.interestsToAdd.push(newInterest);
    }
    else if (!event.checked){
      this.interestsToAdd = this.interestsToAdd.filter(x => x.topic !== interest);
    }
  }

  deleteAccount(): void{
    this.userService.deleteUser();
    this.router.navigateByUrl('');
    this.responseService.displayDialog(ResponseType.Success, 'You Have Successfully Deleted Your Account!');
  }

  change(event): void {
    this.newUser = event.target.value;
  }

  register(): void {
    if (this.newUser.length > 0){
      this.userService.setUser(this.createNewUser());
      this.submitInterests();
      this.foundUser = this.userService.getUser();
      this.responseService.displayDialog(ResponseType.Success, 'You Have Successfully Registered!');
    }
  }

  submitInterests(): void{
    if  (this.interestsToAdd.length > 0){
      this.interestsToAdd.forEach((interest) => {
        this.userService.postUserInterest(interest).subscribe((data) => {});
      });
    }
  }

  createNewUser(): User{
    if (this.interestsToAdd.length > 0){
    const user: User = {
      username: this.newUser,
      storedReads: false,
      storedInterests: true
     };

    return user;
    }
  else{
    const user: User = {
      username: this.newUser,
      storedReads: false,
      storedInterests: false
     };

    return user;
   }
  }
}
