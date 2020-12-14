import { Book, SearchType } from './../models/';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]>{
      return this.http.get<Book[]>('http://localhost:3000/books');
  }

  private searchBookCateogry(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:3000/books/category/${searchTerm}`);
  }

  private searchBookAuthor(searchTerm: string): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:3000/books/authors/${searchTerm}`);
  }

  private searchBookTitle(searchTerm: string): Observable<Book[]>{
   return this.http.get<Book[]>(`http://localhost:3000/books/search/${searchTerm}`);
  }

  public getBookById(id: string): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  public getBookCategories(): Observable<string[]>{
    return this.http.get<string[]>(`http://localhost:3000/books/categories`);
  }

  public addRatingForBook(id: string, rating: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/rate/${id}/${rating.toString()}`);
  }

  public search(searchTerm: string, searchType: SearchType): Observable<Book> {
    const subject = new Subject<Book>();
    this.determineSearchType(searchTerm, searchType).subscribe((data) => {
      data.map(item => {
        subject.next(item);
      });
    });
    return subject.asObservable();
  }

  private determineSearchType(term: string, searchType: SearchType): Observable<Book[]> {
    if (searchType === SearchType.Author) {
        return this.searchBookAuthor(term);
    } else if (searchType === SearchType.Title){
        return this.searchBookTitle(term);
    } else if (searchType === SearchType.Category){
      return this.searchBookCateogry(term);
    }

  }
}
