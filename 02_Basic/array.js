
// Arrays are resizable and can store mixed data types.
// Most array copy operations create shallow copies.

const myArr = [1, 2, 3, 4, 5];

// push() -> add element at end
myArr.push(6);
myArr.push(7);

// pop() -> remove last element
myArr.pop();

// unshift() -> add element at beginning
myArr.unshift(9);

// shift() -> remove first element
myArr.shift();

// includes() -> check element exists or not
console.log(myArr.includes(9));

// indexOf() -> returns index, otherwise -1
console.log(myArr.indexOf(4));

// join() -> converts array to string
const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice() -> does not modify original array
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log(myArr);

// splice() -> modifies original array
const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log(myArr);

const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["batman", "flash", "superman"];

// push() creates nested array
// marvelHeroes.push(dcHeroes);

// concat() returns new merged array
const heroes = marvelHeroes.concat(dcHeroes);

// Spread Operator 
const allHeroes = [
  ...marvelHeroes,
  ...dcHeroes,
];

console.log(allHeroes);

// flat() removes nested arrays
const anotherArray = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [6, 7, [4, 5]],
];

const realAnotherArray =
  anotherArray.flat(Infinity);

console.log(realAnotherArray);

// Array.isArray() -> checks if value is array
console.log(Array.isArray("Suryansh"));

// Array.from() -> converts iterable to array
console.log(Array.from("Suryansh"));

// Object is not directly iterable
console.log(
  Array.from({ name: "Suryansh" })
);

// Array.of() -> creates array from values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(
  Array.of(score1, score2, score3)
);

/*
Important:

slice()
- Does not modify original array

splice()
- Modifies original array

Spread Operator (...)
- Preferred way to merge arrays

indexOf()
- Returns index
- Returns -1 if not found
*/

