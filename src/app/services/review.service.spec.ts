import { testBooks } from './../models/test-data';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { Review } from '../models';

describe('ReviewService', () => {
  let service: ReviewService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ReviewService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined with bad review', () => {
    const review =  service.submitReview(undefined, 'test', '1');
    expect(review).toBe(undefined, 'We Got something Back!');
  });

  it('should return a book when submitting a good review', () => {

    const review: Review = {
      review : 'test',
      reviewer: 'test-reviewer'
    };

    service.reviewPost(review, 'testId').subscribe((book) => {
      expect(book).toBeDefined('No Book Returned');
    });

    const req = httpTestingController.expectOne('http://localhost:3000/books/review/testId');
    expect(req.request.method).toEqual('POST');

    req.flush({payload: Object.values(testBooks[0])});
  });
});
