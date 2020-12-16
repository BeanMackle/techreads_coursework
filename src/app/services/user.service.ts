import { Interest, History, User } from './../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


   /**
    * Sets a user in local storage
    * @param {User} user
    */
  setUser(user: User): void{
    localStorage.setItem('treads_user', JSON.stringify(user));
  }


   /**
    * Get the User from local storage
    * @returns {User} User
    */
  getUser(): User{
    return JSON.parse(localStorage.getItem('treads_user')) as User;
  }


   /**
   * Deletes the user from local storage
   */
  deleteUser(): void{
    localStorage.removeItem('treads_user');
  }


   /**
   * Gets the current users Reading history
   * @returns {Observable<History>} History Array
   */
  getUserHistory(): Observable<History[]>{
    return this.http.get<History[]>(`http://localhost:3000/history/${this.getUser().username}`);
  }


   /**
    * Post request to send User history
    * @param {History} history
    * @returns {Observable<History>} History
    */
  postUserHistory(history: History): Observable<History>{
    return this.http.post<History>(`http://localhost:3000/history`, history);
  }


   /**
   * Get the current Get Users interest
   * @returns {Observable<Interest>} Interest
   */
  getUserInterests(): Observable<Interest[]>{
    return this.http.get<Interest[]>(`http://localhost:3000/interests/${this.getUser().username}`);
  }


   /**
   * Post a new User interest
   * @param {Interest} interest
   * @returns {Observable<Interest>} Interest
   */
  postUserInterest(interest: Interest): Observable<Interest>{
    return this.http.post<Interest>(`http://localhost:3000/interests`, interest);
  }
}
