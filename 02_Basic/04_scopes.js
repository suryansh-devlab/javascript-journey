// ====================================
// Scope in JavaScript
// ====================================

// Global Scope
// Variables declared outside blocks/functions
// can be accessed anywhere.

let a = 300;

// ====================================
// Block Scope
// ====================================

// let and const are block scoped.
// var ignores block scope.

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

  console.log("INNER:", a);
}

// console.log(a); // 300

// console.log(b); // Error: b is block scoped

// console.log(c); // 30
// var leaks outside the block

// ====================================
// Nested Scope
// ====================================

// Child functions can access parent variables.
// Parent cannot access child variables.

function one() {
  const username = "nikhil";

  function two() {
    const website = "youtube";

    console.log(username);
  }

  two();

  // console.log(website);
  // Error: website is not accessible here
}

// one();

// ====================================
// Nested if Blocks
// ====================================

// Inner block can access outer variables.

if (true) {
  const username = "suryansh";

  if (username === "suryansh") {
    const website = " youtube";

    console.log(username + website);
  }

  // console.log(website);
  // Error: website is block scoped
}

// console.log(username);
// Error: username is block scoped

// ====================================
// Hoisting
// ====================================

// Function declarations are hoisted.
// Can be called before definition.

addOne(1);

function addOne(num) {
  return num + 1;
}

// ====================================
// Function Expressions
// ====================================

// Function stored in variable.

// Not fully hoisted.

// Cannot be called before initialization.

// addTwo(3);
// Error:
// Cannot access 'addTwo'
// before initialization

const addTwo = function (num) {
  return num + 1;
};

addTwo(5);

/*
Quick Revision

Global Scope
-> Accessible everywhere

Block Scope
-> Accessible only inside block

let
-> Block scoped

const
-> Block scoped

var
-> Function scoped
-> Avoid using

Nested Scope
-> Child can access parent
-> Parent cannot access child

Hoisting
-> Moves declarations to top

Function Declaration
-> Hoisted completely

Function Expression
-> Cannot be used before initialization
*/
