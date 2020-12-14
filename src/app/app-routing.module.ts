import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { UserComponent } from './user/user.component';
import { InterestsComponent } from './interests/interests.component';
import { BookPageComponent } from './book-page/book-page.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: AllBooksComponent},
  { path: 'advanced-search', component: AdvancedSearchComponent},
  { path: 'search/:term', component: SearchComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'interests', component: InterestsComponent},
  { path: 'user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
