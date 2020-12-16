import { Book, SearchType } from './../models/';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

   /**
   * Request to retrieve all books
   * @returns {Array<Book>} Book Array
   */
  public getAllBooks(): Observable<Book[]>{
      return this.http.get<Book[]>('http://localhost:3000/books');
  }

   /**
    * Request to retrieve books based off of category and search term
    * @param {string} searchTerm
    * @returns {Obsverable<Array<Book>>} Book Array
    */
  private searchBookCateogry(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:3000/books/category/${searchTerm}`);
  }
   /**
    * Request to retrieve books based off of author and search term
    * @param {string} searchTerm
    *  * @returns {Obsverable<Array<Book>>} Book Array
    */
  private searchBookAuthor(searchTerm: string): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:3000/books/authors/${searchTerm}`);
  }

   /**
    * Request to retrieve books based off of title and search term
    * @param {string} searchTerm
    * @returns {Obsverable<Array<Book>>} Book Array
    */
  private searchBookTitle(searchTerm: string): Observable<Book[]>{
   return this.http.get<Book[]>(`http://localhost:3000/books/search/${searchTerm}`);
  }

   /**
    * Request to retrieve book using the id
    * @param {string} Book Id
    * @returns {Obsverable<Book>} Book
    */
  public getBookById(id: string): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  /**
   * Request to retrieve all book categories
   * @returns {Array<string>} Book categories
   */
  public getBookCategories(): Observable<string[]>{
    return this.http.get<string[]>(`http://localhost:3000/books/categories`);
  }

   /**
   * Request to add a rating for a book
   * @param {string} BookId
   * @param {number} rating
   * @returns {Observable<Book>} Book Array
   */
  public addRatingForBook(id: string, rating: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/rate/${id}/${rating.toString()}`);
  }


   /**
   * Sunmits a search using the search type parameters and search term
   * @param {string} searchTerm
   * @param {SearchType} SearchType
   * @returns {Book} Book
   */
  public search(searchTerm: string, searchType: SearchType): Observable<Book> {
    const subject = new Subject<Book>();
    this.determineSearchType(searchTerm, searchType).subscribe((data) => {
      data.map(item => {
        subject.next(item);
      });
    });
    return subject.asObservable();
  }


   /**
    * Function that determines the search type
    * @param {string} term
    * @param {SearchType} type
    * @returns {Function} appropiate function to be subscribed to
    */
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
