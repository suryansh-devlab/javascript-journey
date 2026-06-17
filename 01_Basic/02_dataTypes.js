"use strict"; // Treat all JavaScript code as newer version

// alert("Hello");
// Not available in Node.js environment.alert() works only in browsers.

// ====== Data Types in JavaScript=================

let name = "Suryansh"; // String
let age = 22; // Number
let isLoggedIn = false; // Boolean
let state; // Undefined

// Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// null -> standalone value, intentional absence of value
let temperature = null;

// undefined -> variable declared but value not assigned
let city;

// symbol -> used to create unique identifiers
const id = Symbol("123");

// Object -> collection of key-value pairs
const user = {
  name: "Suryansh",
  age: 22,
};

// =============typeof Operator=====================

// typeof is used to determine the data type of a value

console.log(typeof "Suryansh"); // string
console.log(typeof 22); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical JavaScript bug)

/* Interview Questions
typeof null      => "object"
typeof undefined => "undefined"

Q: Why does typeof null return "object"?
A: It is a historical bug in JavaScript's original implementation.
   null is not actually an object, but changing the behavior now would 
   break existing code, so it has been preserved for 
   backward compatibility. */
