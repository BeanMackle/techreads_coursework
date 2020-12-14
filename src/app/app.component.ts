import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { Observable, Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Book} from './models';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ClientApp';
  searchValue = '';
  filteredBookOptions: Observable<Book>;
  form = new FormControl();
  searchError: string;
  foundUser: string;

  constructor(private router: Router, private userService: UserService){
    this.foundUser = this.userService.getUser();
  }

  public search(): void {
    if (this.searchValue.length > 0){
    this.submitSearch();
    }
    else{
      this.searchError = 'Please Enter a Search Term';
    }
  }

  change(event): void {
    this.searchValue = event.target.value;
  }

  submitSearch(): void{
    if (this.searchValue.length > 0) {
      this.router.navigateByUrl(`/search/${this.searchValue}`);
    }
  }
}
