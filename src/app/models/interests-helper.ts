import { DisplayInterests, Interest } from '.';

let bookCategories: Array<string> = new Array<string>();
let userInterests: Array<Interest> = new Array<Interest>();
let builtInterests: Array<DisplayInterests> = new Array<DisplayInterests>();




export function buildInterests(interests: Array<Interest>, categories: Array<string>): Array<DisplayInterests>{
  builtInterests =  new Array<DisplayInterests>();
  bookCategories = categories;
  userInterests = interests;

  filter();

  return builtInterests;
}

function filter(): void{

  const foundInterests = new Array<string>();

  if (userInterests !== undefined && userInterests.length > 0){
  userInterests.forEach((value): void => {
      foundInterests.push(value.topic);
    });
  const matchedInterests = bookCategories.filter(x => foundInterests.includes(x));

  buildUpInterests(matchedInterests);
  }
  buildNonInterests();
}

function buildUpInterests(matched: string[]): void{

  matched.forEach((interest): void => {
      const displayInterest: DisplayInterests = {
        category: interest,
        interest: true,
      };

      builtInterests.push(displayInterest);
    });
}

function buildNonInterests(): void{
  const foundInterests = new Array<string>();

  if (userInterests !== undefined && userInterests.length > 0){
  userInterests.forEach((value): void => {
      foundInterests.push(value.topic);
    });
  const nonInterests = bookCategories.filter(x => !foundInterests.includes(x));

  addNonInterests(nonInterests);
  }
  else{

  addNonInterests(bookCategories);
  }
}

function addNonInterests(nonInterests: Array<string>): void{
  nonInterests.forEach((interest): void => {
      const nonInterested: DisplayInterests = {
        category: interest,
        interest: false,
      };

      builtInterests.push(nonInterested);
    });
}
