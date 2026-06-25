// ====================================
// forEach()
// ====================================

// Executes callback for each element.
// Does not return a new array.

const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values); // undefined

// ====================================
// filter()
// ====================================

// Returns a new array containing only
// elements that satisfy the condition.

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => {
//   return num > 5;
// });

// console.log(newNum);

// Using forEach()

// const newNums = [];

// myNum.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// ====================================
// filter() with Array of Objects
// ====================================

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const historyBooks = books.filter(
//   (book) => book.genre === "History"
// );

// console.log(historyBooks);

// ====================================
// map()
// ====================================

// Returns a new array after transforming
// every element.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map(
//   (num) => num + 10
// );

// console.log(newNums);

// ====================================
// Method Chaining
// ====================================

// Multiple array methods can be chained.

const result = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(result);

// ====================================
// reduce()
// ====================================

// Reduces an array into a single value.

const array1 = [1, 2, 3, 4, 5];

const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

// ====================================
// reduce() Real World Example
// ====================================

// Calculate total cart price.

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);

/*
====================================

Quick Revision

forEach()
-> Executes callback
-> Returns undefined

filter()
-> Returns filtered array

map()
-> Returns transformed array

reduce()
-> Returns single value

Method Chaining
-> Multiple methods together

forEach()
-> Cannot use break/continue

filter()
-> Condition based selection

map()
-> Modify every element

reduce()
-> Sum
-> Count
-> Group
-> Flatten
-> Total Price

====================================
*/
