import { ResponseType } from './../models/response-type';
import { ResponseService } from './../services/response.service';
import { RatingDistrubtion } from './../models/';
import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() ratings: number[];

  @Input() bookId: string;



  userRating: number;

  averageRating: string;

  ratingDistribution: Array<RatingDistrubtion>;

  totalRatings: number;


  constructor(private bookService: BookService, private responseService: ResponseService) { }

  ngOnInit(): void {
        this.calculateRatings();
  }


  calculateRatings(): void {
    this.getAverageRating();
    this.getTotalRatings();
    this.getRatingDistribution();
  }

  private getAverageRating(): void{
    let rating = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.ratings.length; i++){
      rating += this.ratings[i];
    }

    this.averageRating = this.getPercentageValue(rating / this.ratings.length).toString().substr(0, 4);
  }

  private getPercentageValue(rating: number): number{
    return (rating / 5) * 100;
  }

  getTotalRatings(): void {
    this.totalRatings = this.ratings.length;
  }

  getRatingDistribution(): void {
    const sepereatedRatings = this.seperateRatings();
    this.ratingDistribution = this.calculateDistributionPercentage(sepereatedRatings);
  }

  calculateDistributionPercentage(ratings: Array<RatingDistrubtion>): Array<RatingDistrubtion>{
    ratings.forEach((ratingDis: RatingDistrubtion) => {
    ratingDis.percentage = ((ratingDis.ratings.length / this.ratings.length * 100).toString()).substr( 0, 4);
    });

    return ratings;

  }

  seperateRatings(): Array<RatingDistrubtion>{
    const ratings = new Array<RatingDistrubtion>();
    for (let i = 1; i < 6; i++) {
     const newRatings: number[] = (this.ratings.filter(x => x === i));


     const ratingsToAdd: RatingDistrubtion = {
       rating: i,
       ratings: newRatings,
       percentage: '',
     };
     ratings.push(ratingsToAdd);
    }

    return ratings;
  }
  captureRating(value: string): void {
      this.userRating = +value;
  }

  submitRating(): void{

    if (this.userRating > 0 && this.userRating < 6){
        this.bookService.addRatingForBook(this.bookId, this.userRating).subscribe((data) => {
          this.ratings = data.ratings;
          this.calculateRatings();
        });
    }
    else{
      this.responseService.displayDialog(ResponseType.Unknown, 'Please Enter A Rating!');
    }
  }
}
