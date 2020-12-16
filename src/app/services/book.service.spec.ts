import { testBooks } from './../models/test-data';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';



import { BookService } from './book.service';
import { SearchType } from '../models';


describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
   });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all Books', () => {

    service.getAllBooks()
        .subscribe(books => {

          expect(books).toBeTruthy('No Books returned');
          expect(books['payload'].length).toBe(18,
                'Expected 17 Books');
          const book = books['payload'][0];
          expect(book.isbn).toBe(
                '978-1491952023', 'Incorrect ISBN returned');

        });

    const req = httpTestingController.expectOne('http://localhost:3000/books');

    expect(req.request.method).toEqual('GET');

    req.flush({payload: Object.values(testBooks)});

});

  it('should retrieve one Book', () => {

  service.getBookById('2')
      .subscribe(book => {
          expect(book).toBeTruthy('No Book returned');

          expect(book['payload'][0].length).toBe(1,
              'Expected 1 Book');
      });
  const req = httpTestingController.expectOne('http://localhost:3000/books/2');

  expect(req.request.method).toEqual('GET');

  req.flush({payload: Object.values(testBooks[1])});

  });

  it('should add rating for book', () => {
    service.addRatingForBook('1', 4).subscribe((resp) => {
      expect(resp['payload'][0].length).toBe(1,
        'Expected 1 Book');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/books/rate/1/4');

    expect(req.request.method).toEqual('GET');

    req.flush({payload: Object.values(testBooks[1])});
  });

  it('should send request book search - Title ', () => {
    service.search('test', SearchType.Title).subscribe((resp) => {});
    const req = httpTestingController.expectOne('http://localhost:3000/books/search/test');

    expect(req.request.method).toEqual('GET');
  });

  it('should send request book search - Author', () => {
    service.search('test', SearchType.Author).subscribe((resp) => {});
    const req = httpTestingController.expectOne('http://localhost:3000/books/authors/test');

    expect(req.request.method).toEqual('GET');
  });

  it('should send request book search - Category', () => {
    service.search('test', SearchType.Category).subscribe((resp) => {});
    const req = httpTestingController.expectOne('http://localhost:3000/books/category/test');

    expect(req.request.method).toEqual('GET');
  });

  it('should send request to get all book categories', () => {
  service.getBookCategories().subscribe((resp) => {});
  const req = httpTestingController.expectOne('http://localhost:3000/books/categories');

  expect(req.request.method).toEqual('GET');
  });
});

