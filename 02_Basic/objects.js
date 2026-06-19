
// Singleton Object
// Created using constructor functions or Object.create()

// Object Literal
// Most common way to create objects.

const mySym = Symbol("key1");

// Symbol keys must be wrapped in []
// Otherwise they are treated as normal strings.

const user = {
  name: "Suryansh",
  "full name": "Suryansh Kushwaha",
  [mySym]: "myKey1",
  age: 24,
  location: "Lucknow",
  email: "suryanshkushwaha.devlab@gmail.com",
  isLoggedIn: false,
  lastLoginInDays: ["Monday", "Saturday"],
};

// ====================================
// Accessing Object Properties
// ====================================

// Dot notation
// Used for normal property names.

// console.log(user.name);

// Bracket notation
// Required for spaces, symbols, and dynamic keys.

// console.log(user["full name"]);
// console.log(user[mySym]);

// ====================================
// Updating Properties
// ====================================

// Objects are mutable by default.

// user.email = "suryansh@gmail.com";

// ====================================
// Object.freeze()
// ====================================

// Prevents adding, deleting, or modifying properties.

// Object.freeze(user);

// user.name = "Atul";

// console.log(user);

// ====================================
// Adding Methods
// ====================================

// Objects can store functions as methods.

// user.greeting = function () {
//   console.log("Hello JS User");
// };

// user.greeting2 = function () {
//   console.log(`Hello ${this.name}`);
// };

// this refers to the current object.

// console.log(user.greeting());
// console.log(user.greeting2());

// ====================================
// Singleton Object
// ====================================

// Created using constructor.

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// ====================================
// Nested Objects
// ====================================

// Objects can contain other objects.

const regularUser = {
  email: "sam@gmail.com",

  fullname: {
    userfullname: {
      firstname: "Sam",
      lastname: "Kumar",
    },
  },
};

// Access nested values

// console.log(
//   regularUser.fullname.userfullname.firstname
// );

// ====================================
// Optional Chaining
// ====================================

// Safely accesses nested properties.
// Prevents runtime errors if property is missing.

// console.log(
//   regularUser.fullname?.userfullname.firstname
// );

// ====================================
// Merging Objects
// ====================================

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// Object.assign()
// Merges multiple objects into one object.

// const obj3 = Object.assign({}, obj1, obj2);

// Spread Operator (...)
// Modern and preferred way to merge objects.

const obj3 = {
  ...obj1,
  ...obj2,
};

// console.log(obj3);

// ====================================
// Array of Objects
// ====================================

// Very common in APIs and databases.

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "b@gmail.com",
  },
];

// console.log(users[1].email);

// ====================================
// Object Utility Methods
// ====================================

// Object.keys()
// Returns an array of all keys.

// console.log(
//   Object.keys(tinderUser)
// );

// Object.values()
// Returns an array of all values.

// console.log(
//   Object.values(tinderUser)
// );

// Object.entries()
// Returns array of [key, value] pairs.

// console.log(
//   Object.entries(tinderUser)
// );

// hasOwnProperty()
// Checks if property exists in object.

// console.log(
//   tinderUser.hasOwnProperty("isLoggedIn")
// );

// ====================================
// Object Destructuring
// ====================================

const course = {
  coursename: "JS in Hindi",
  price: "0",
  author: "Chai Aur Code",
};

// Traditional Access

// console.log(course.coursename);

// Destructuring
// Extract values from object into variables.

const {
  coursename: language,
} = course;

// console.log(language);

/*
====================================

Quick Revision

Object.freeze()
-> Prevents modification

Object.keys()
-> Array of keys

Object.values()
-> Array of values

Object.entries()
-> Array of [key, value]

hasOwnProperty()
-> Checks property exists

Optional Chaining (?.)
-> Safe property access

Object.assign()
-> Merge objects

Spread (...)
-> Preferred merge method

Destructuring
-> Extract values from object

this
-> Refers to current object

*/
