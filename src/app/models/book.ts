import { Review } from './review';

export interface Book {
   id: string;

  authors: Array<string>;

  title: string;

  description: string;

  publisher: string;

  year: Date;

  isbn: string;

  image: string;

  category: string;

  ratings: Array<number>;

  reviews: Array<Review>;

}
