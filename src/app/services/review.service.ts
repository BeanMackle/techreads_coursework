import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  public submitReview(review: string, author: string, id: string): any{
      if (review === undefined || author === undefined || id === undefined){
        return undefined;
      }
      else{
        const body: Review = { reviewer : author, review };

        this.reviewPost(body, id).subscribe((data) => {
          return data;
        });
      }
  }

  private reviewPost(body, id: string): Observable<any>{
   return this.http.post<Review>(`http://localhost:3000/books/review/${id}`, body);
  }
}
