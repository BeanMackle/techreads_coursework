import { Interest, History, User } from './../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setUser(user: User): void{
    localStorage.setItem('treads_user', JSON.stringify(user));
  }

  getUser(): User{
    return JSON.parse(localStorage.getItem('treads_user')) as User;
  }

  deleteUser(): void{
    localStorage.removeItem('treads_user');
  }

  getUserHistory(): Observable<History[]>{
    return this.http.get<History[]>(`http://localhost:3000/history/${this.getUser().username}`);
  }

  postUserHistory(history: History): Observable<History>{
    return this.http.post<History>(`http://localhost:3000/history`, history);
  }

  getUserInterests(): Observable<Interest[]>{
    return this.http.get<Interest[]>(`http://localhost:3000/interests/${this.getUser().username}`);
  }

  postUserInterest(interest: Interest): Observable<Interest>{
    return this.http.post<Interest>(`http://localhost:3000/interests`, interest);
  }
}
