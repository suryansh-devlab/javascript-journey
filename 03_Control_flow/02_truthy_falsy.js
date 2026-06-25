// ====================================
// Truthy & Falsy Values
// ====================================

// Truthy values execute the if block.
// Falsy values execute the else block.

const userEmail = "n@nikhil.ai";

if (userEmail) {
  console.log("Got user email!");
} else {
  console.log("Don't have user email");
}

// ====================================
// Falsy Values
// ====================================

// false
// 0
// -0
// 0n (BigInt)
// ""
// null
// undefined
// NaN

// ====================================
// Truthy Values
// ====================================

// "0"
// "false"
// " "
// []
// {}
// function(){}

// ====================================
// Checking Empty Array
// ====================================

// Empty array is truthy.
// Check length instead.

const fruits = [];

if (fruits.length === 0) {
  console.log("Array is empty!");
}

// ====================================
// Checking Empty Object
// ====================================

// Empty object is truthy.
// Object.keys() returns an array of keys.

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty!");
}

// ====================================
// Equality Confusion
// ====================================

// false == 0      -> true
// false == ""     -> true
// 0 == ""         -> true

// false === 0     -> false
// false === ""    -> false
// 0 === ""        -> false

// ====================================
// Nullish Coalescing Operator (??)
// ====================================

// Returns right value only when
// left value is null or undefined.

let val1;

val1 = 5 ?? 10;
console.log(val1);

// 5

// val1 = null ?? 10;
// console.log(val1);

// 10

// val1 = undefined ?? 20;
// console.log(val1);

// 20

// val1 = null ?? 10 ?? 20;
// console.log(val1);

// 10

// ====================================
// Ternary Operator
// ====================================

// Short form of if...else.

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

/*
====================================

Quick Revision

Truthy
-> Executes if block

Falsy
-> Executes else block

Empty Array
-> Truthy

Empty Object
-> Truthy

Object.keys(obj).length
-> Check empty object

arr.length
-> Check empty array

??
-> Returns first non-null/undefined value

?:
-> Short form of if...else

====================================
*/
