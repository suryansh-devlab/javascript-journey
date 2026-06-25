// ====================================
// for Loop
// ====================================

// Used when number of iterations is known.

for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// ====================================
// Nested for Loop
// ====================================

// Used for matrices, patterns and tables.

for (let i = 0; i < 4; i++) {
  console.log(`Outer Loop: ${i}`);

  for (let j = 0; j < 2; j++) {
    console.log(`Inner Loop: ${j}`);
  }
}

// ====================================
// Looping Through Array
// ====================================

const heroes = [
  "Flash",
  "Batman",
  "Superman",
];

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// ====================================
// break
// ====================================

// Stops the loop immediately.

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5");
    break;
  }

  console.log(i);
}

// ====================================
// continue
// ====================================

// Skips current iteration.

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Skip 5");
    continue;
  }

  console.log(i);
}

// ====================================
// while Loop
// ====================================

// Used when number of iterations
// is not known.

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

// Loop through array

let index = 0;

while (index < heroes.length) {
  console.log(heroes[index]);
  index++;
}

// ====================================
// do...while Loop
// ====================================

// Executes at least once.

let score = 1;

do {
  console.log(score);
  score++;
} while (score <= 10);

// ====================================
// for...of
// ====================================

// Used for iterable objects like:
// Arrays
// Strings
// Maps
// Sets

const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num);
}

const greeting = "Hello";

for (const ch of greeting) {
  console.log(ch);
}

// ====================================
// Map
// ====================================

// Stores unique keys.
// Maintains insertion order.

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States");
map.set("FR", "France");
map.set("IN", "India");

for (const [key, value] of map) {
  console.log(key, value);
}

// ====================================
// for...in
// ====================================

// Used for objects.
// Returns property keys.

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObject) {
  console.log(`${key} -> ${myObject[key]}`);
}

// Can also be used with arrays,
// but returns indexes.

const programming = [
  "HTML",
  "CSS",
  "JavaScript",
];

for (const index in programming) {
  console.log(index);
  console.log(programming[index]);
}

// ====================================
// forEach()
// ====================================

// Executes callback for every element.
// Does not return a new array.

const coding = [
  "HTML",
  "CSS",
  "JavaScript",
];

// Anonymous Function

coding.forEach(function (item) {
  console.log(item);
});

// Arrow Function

coding.forEach((item) => {
  console.log(item);
});

// Passing Function Reference

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

// Access item, index and array

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// ====================================
// Array of Objects
// ====================================

// Common in APIs and databases.

const myCoding = [
  {
    languageName: "JavaScript",
    languageFile: "js",
  },
  {
    languageName: "Java",
    languageFile: "java",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(
    item.languageName,
    item.languageFile
  );
});

/*
====================================

Quick Revision

for
-> Fixed number of iterations

while
-> Unknown number of iterations

do...while
-> Executes at least once

break
-> Stops loop

continue
-> Skips current iteration

for...of
-> Arrays
-> Strings
-> Maps
-> Sets

for...in
-> Objects
-> Returns keys

forEach()
-> Executes callback
-> No break or continue
-> Does not return new array

Map
-> Unique keys
-> Ordered

====================================
*/

