// ====================================
// Functions in JavaScript
// ====================================

// Function Declaration
// Creates a reusable block of code.

function sayMyName() {
  console.log("Suryansh");
}

// Function Reference
// sayMyName

// Function Execution
// sayMyName();

// ====================================
// Parameters & Arguments
// ====================================

// Parameters are variables inside function definition.

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

// Arguments are values passed during function call.

// addTwoNumbers(4, 8);

// ====================================
// Return Statement
// ====================================

// return sends a value back from a function.

function anotherAdd(number1, number2) {
  return number1 + number2;
}

const ans = anotherAdd(10, 10);

// console.log(ans);

// ====================================
// Default Parameters
// ====================================

// Used when no argument is provided.

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Suryansh"));

// ====================================
// Rest Operator (...)
// ====================================

// Collects multiple values into an array.

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(
//   calculateCartPrice(
//     200,
//     400,
//     500,
//     800
//   )
// );

// ====================================
// Passing Objects to Functions
// ====================================

const user = {
  username: "Suryansh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username}
and price is ${anyObject.price}`
  );
}

// handleObject(user);

// Direct object passing

// handleObject({
//   username: "Sam",
//   price: 999,
// });

// ====================================
// Passing Arrays to Functions
// ====================================

const myNewArray = [
  200,
  400,
  100,
  600,
];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(
//   returnSecondValue(myNewArray)
// );

// ====================================
// this Keyword
// ====================================

// this refers to current object.

const currentUser = {
  username: "suryansh",
  price: 999,

  welcomeMessage: function () {
    console.log(
      `${this.username}
welcome to website!`
    );
  },
};

// currentUser.welcomeMessage();

// currentUser.username = "Sam";

// currentUser.welcomeMessage();

// ====================================
// Arrow Functions
// ====================================

// Shorter syntax for writing functions.

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(10, 10));

// ====================================
// Implicit Return
// ====================================

// No return keyword needed
// when expression is written directly.

const addThree = (num1, num2) =>
  num1 + num2;

// console.log(addThree(10, 10));

// Parentheses can also be used.

const addFour = (num1, num2) => (
  num1 + num2
);

// console.log(addFour(10, 10));

// Returning Object

const createUser = () => ({
  username: "Suryansh",
});

// console.log(createUser());

// ====================================
// IIFE
// Immediately Invoked Function Expression
// ====================================

// Executes immediately after creation.

// Used to avoid global scope pollution.

(function db() {
  console.log("DB Connected");
})();

// Arrow Function IIFE

((name) => {
  console.log(`Hi ${name}`);
})("Suryansh");

/*
Quick Revision

Function
-> Reusable block of code

Parameters
-> Variables in function definition

Arguments
-> Values passed during call

return
-> Sends value back

Default Parameter
-> Used when value not provided

Rest Operator (...)
-> Collects values into array

this
-> Refers to current object

Arrow Function
-> Short function syntax

Implicit Return
-> No return keyword needed

IIFE
-> Runs immediately

*/
