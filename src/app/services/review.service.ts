import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }


   /**
    * function to submit a review
    * @param {string} review
    * @param {string} author
    * @param {string} id
    * @returns {Observable<Book>} Book
    */
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


   /**
   * Function containing post request to submit review
   * @param {Review} body
   * @param {string} id
   * @returns {Observable<any>} Book
   */
  public reviewPost(body: Review, id: string): Observable<any>{
   return this.http.post<Review>(`http://localhost:3000/books/review/${id}`, body);
  }
}
