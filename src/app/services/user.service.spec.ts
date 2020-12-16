import { Interest } from './../models/interests';
import { testHistory, testInterest } from './../models/test-data';
import { User, History } from './../models/';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';


describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    service.deleteUser();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('User should be created and retrieved', () => {

    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    service.setUser(testUser);

    const foundUser = service.getUser();

    expect(foundUser.username).toBe('test', 'Not the User Expected!');

  });

  it('User should be created and updated', () => {
    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    service.setUser(testUser);

    let foundUser = service.getUser();

    expect(foundUser.username).toBe('test', 'Not the User Expected!');

    testUser.username = 'test2';

    service.setUser(testUser);

    foundUser = service.getUser();

    expect(foundUser.username).toBe('test2', 'Not the User Expected!');
  });

  it('User should be deleted', () => {
    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    service.setUser(testUser);

    const foundUser = service.getUser();

    expect(foundUser.username).toBe('test', 'Not the User Expected!');


    service.deleteUser();

    expect(service.getUser()).toBe(undefined || null, 'Not the User Expected!');
  });

  it('GET request should return a User History', () => {

    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    service.setUser(testUser);

    service.getUserHistory().subscribe((history) => {
      expect(history).toBeDefined('No History Returned');
      // tslint:disable-next-line: no-string-literal
      expect(history['payload'][0]).toBe('test', 'Not the right User');

    });
    const req = httpTestingController.expectOne('http://localhost:3000/history/test');
    expect(req.request.method).toEqual('GET');

    req.flush({payload: Object.values(testHistory)});
  });

  it('POST request should return a User History', () => {

    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    const history: History = {
        user: 'test',
        book: '1',
        date: new Date()
    };

    service.setUser(testUser);

    service.postUserHistory(history).subscribe((returnedHistory) => {
      expect(returnedHistory).toBeDefined('No History Returned');
      expect(returnedHistory['payload'][0]).toBe('test', 'Not the right User');

    });
    const req = httpTestingController.expectOne('http://localhost:3000/history');
    expect(req.request.method).toEqual('POST');

    req.flush({payload: Object.values(history)});
  });

  it('GET request should return a User Interest', () => {

    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    service.setUser(testUser);

    service.getUserInterests().subscribe((interest) => {
      expect(interest).toBeDefined('No Interest Returned');
      expect(interest['payload'][1]).toBe('CSS', 'Not the right User');

    });
    const req = httpTestingController.expectOne('http://localhost:3000/interests/test');
    expect(req.request.method).toEqual('GET');

    req.flush({payload: Object.values(testInterest)});
  });

  it('POST request should return a User Interest', () => {
    const testUser: User = {
      username: 'test',
      storedInterests: false,
      storedReads: false
    };

    const interest: Interest = {
        user: 'test',
        topic: 'JS',
    };

    service.setUser(testUser);

    service.postUserInterest(interest).subscribe((returnedInterest) => {
      expect(returnedInterest).toBeDefined('No Interest Returned');
      expect(returnedInterest['payload'][1]).toBe('JS', 'Not the right Ineterest');

    });
    const req = httpTestingController.expectOne('http://localhost:3000/interests');
    expect(req.request.method).toEqual('POST');

    req.flush({payload: Object.values(interest)});
  });
});
