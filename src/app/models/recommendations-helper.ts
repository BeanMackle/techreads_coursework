import { Interest } from './interests';
import { Book } from './book';
import {History } from './history';

export function getReccomendations(allBooks: Array<Book>, userInterests: Array<Interest>, userHistory: Array<History> ): Array<Book> {

  const recommendedBooks = new Array<Book>();

  if (userInterests && userHistory){
  userInterests.forEach((interest) => {
    const books = allBooks.filter(x => x.category === interest.topic);
    books.forEach((book) => {
      const foundBook = recommendedBooks.filter(x => x.id === book.id);
      if (foundBook.length === 0 && !checkIfRead(book.id, userHistory)){
        recommendedBooks.push(book);
      }
    });
  });

  userHistory.forEach((history) => {
    const foundBook = allBooks.filter(x => x.id === history.book);
    const bookCategory = allBooks.filter(x => x.category === foundBook[0].category);

    bookCategory.forEach((book) => {
        const reccomendedBook = recommendedBooks.filter(x => x.id === book.id);
        if (reccomendedBook.length === 0 && !checkIfRead(book.id, userHistory)){
          recommendedBooks.push(book);
        }
    });

  });
  return recommendedBooks;
}
  return recommendedBooks;
}

function checkIfRead(id: string, userHistory: Array<History>): boolean {
  const book = userHistory.filter(x => x.book === id);
  if (book.length > 0){
    return true;
  }
  return false;
}

