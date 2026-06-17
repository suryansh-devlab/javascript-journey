// == Primitive Data Types ====

// There are 7 Primitive Data Types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

// === Symbol ===

// Symbol creates unique values

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

/*
Even though both Symbols contain "123",
they are unique values.
*/

// ==== BigInt =======

// Used for very large integers

const bigNumber = 3456543576654356754n;

// === Reference (Non-Primitive) Types ================

// 1. Array
const heroes = ["shaktiman", "naagraj", "doga"];

// 2. Object
const myObj = {
  name: "Hitesh",
  age: 22,
};

// 3. Function
const myFunction = function () {
  console.log("Hello World");
};

// == typeof Operator ============

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint

console.log(typeof heroes); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function

// ==== Memory =======

// Primitive (Stack)
let myYoutubename = "suryansh";

let anotherName = myYoutubename;

anotherName = "nikhil";

console.log(myYoutubename);
console.log(anotherName);


// Non-Primitive (Stack) - reference 
let userOne = {
  name: "suryansh",
  age: 24,
};

let anotherUser = userOne;

anotherUser.name = "nikhil";

console.log(userOne.name);
console.log(anotherUser.name);

/* ==== Interview Notes =====

Primitive Types:
String
Number
Boolean
Null
Undefined
Symbol
BigInt

Reference Types:
Array
Object
Function

typeof null        => "object"
typeof undefined   => "undefined"
typeof Symbol()    => "symbol"
typeof 123n        => "bigint"
typeof []          => "object"
typeof {}          => "object"
typeof function(){} => "function"

================== Memory ============

Primitive Types:
- Stored in Stack Memory
- Copy of value is passed

Reference Types:
- Stored in Heap Memory
- Reference (address) is passed

This is why modifying an object through
one variable can affect another variable
pointing to the same object.
*/
