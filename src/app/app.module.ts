import { SearchComponent } from './search/search.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPageComponent } from './book-page/book-page.component';
import { InterestsComponent } from './interests/interests.component';
import { UserComponent } from './user/user.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookDisplayComponent } from './book-display/book-display.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RatingsComponent } from './ratings/ratings.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotificationToastComponent } from './notification-toast/notification-toast.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReviewComponent } from './review/review.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    SearchComponent,
    BookPageComponent,
    InterestsComponent,
    UserComponent,
    AllBooksComponent,
    BookDisplayComponent,
    AdvancedSearchComponent,
    RatingsComponent,
    NotificationToastComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
