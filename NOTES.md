<!-- markdownlint-disable MD024  MD025 MD060 MD009 MD035 MD047 MD001-->
# JavaScript Notes

> A comprehensive JavaScript learning guide containing explanations, examples, best practices, common mistakes, and interview notes.

---

# Table of Contents

01. Introduction
02. Variables
03. Data Types
04. Type Conversion
05. Operations
06. Comparisons
07. Memory Management (Stack vs Heap)
08. Strings
09. Numbers
10. Math Object
11. Dates and Time 
12. Array
13. Objects
14. Functions
15. Scope and Hoisting
16. How does JavaScript execute code and Call Stack 
17. Control flow
18. Truthy & Falsy Values 
19. Loops & iteration 
20. Array Higher-Order Methods 

---

# 1. Introduction

JavaScript is a high-level, interpreted, dynamically typed programming language primarily used to build interactive web applications.

JavaScript can run:

* In browsers
* On servers using Node.js
* In mobile applications
* In desktop applications
* In automation tools

Example:

```javascript
console.log("Hello JavaScript");
```

---

# 2. Variables

Variables are containers used to store data.

JavaScript provides three keywords:

* const
* let
* var

---

## const

Used when a variable should not be reassigned.

### Syntax

```javascript
const accountId = 12345;
```

### Rules

* Must be initialized.
* Cannot be reassigned.
* Block scoped.

### Example

```javascript
const accountId = 12345;

// Error
accountId = 99999;
```

### Best Practice

Use `const` by default.

---

## let

Used when a value may change.

### Syntax

```javascript
let email = "abc@gmail.com";
```

### Example

```javascript
let email = "abc@gmail.com";

email = "xyz@gmail.com";
```

### Output

```text
xyz@gmail.com
```

### Best Practice

Use `let` only when reassignment is required.

---

## var

Old way of declaring variables.

### Syntax

```javascript
var password = "123456";
```

### Problems

* Function scoped.
* Can be redeclared.
* Can create unexpected bugs.

### Example

```javascript
var x = 10;
var x = 20;
```

No error occurs.

Avoid using `var` in modern JavaScript.

---

## Variable Summary

| Keyword | Reassign | Redeclare | Scope    |
| ------- | -------- | --------- | -------- |
| const   | ❌        | ❌         | Block    |
| let     | ✅        | ❌         | Block    |
| var     | ✅        | ✅         | Function |

---

# 3. Data Types

Data types define the type of data stored in a variable.

JavaScript has two categories:

1. Primitive Data Types
2. Non Primitive Data Types

---

## Primitive Data Types

Primitive values are immutable.

JavaScript has 7 primitive data types.

### String

Represents textual data.

```javascript
const name = "Suryansh";
```

---

### Number

Represents integers and decimal values.

```javascript
const age = 22;
const price = 99.99;
```

---

### Boolean

Represents true or false.

```javascript
const isLoggedIn = true;
```

---

### Null

Represents intentional absence of value.

```javascript
const user = null;
```

---

### Undefined

Variable declared but not assigned.

```javascript
let city;
```

---

### Symbol

Creates unique identifiers.

```javascript
const id = Symbol("123");
```

Example:

```javascript
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
```

Output:

```text
false
```

Even though descriptions are same, Symbols are always unique.

---

### BigInt

Used for very large integers.

```javascript
const bigNumber = 12345678901234567890n;
```

---

## typeof Operator

Used to determine the type of a value.

Examples:

```javascript
typeof "Hello";     // string
typeof 22;          // number
typeof true;        // boolean
typeof undefined;   // undefined
typeof Symbol();    // symbol
typeof 123n;        // bigint
```

---

## Historical JavaScript Bug

```javascript
typeof null;
```

Output:

```text
object
```

This is a historical bug in JavaScript.

`null` is not actually an object.

The behavior remains for backward compatibility.

---

## Non Primitive Data Types

### Array

```javascript
const fruits = ["Apple", "Mango"];
```

---

### Object

```javascript
const user = {
  name: "Suryansh",
  age: 22
};
```

---

### Function

```javascript
const greet = function () {
  console.log("Hello");
};
```

---

## typeof Non Primitive Types

```javascript
typeof [];            // object
typeof {};            // object
typeof function(){};  // function
```

---

# 4. Type Conversion

JavaScript can convert values from one type to another.

---

## String to Number

```javascript
Number("33");
```

Output:

```text
33
```

---

```javascript
Number("33abc");
```

Output:

```text
NaN
```

---

## Boolean to Number

```javascript
Number(true);
```

Output:

```text
1
```

---

```javascript
Number(false);
```

Output:

```text
0
```

---

## Null to Number

```javascript
Number(null);
```

Output:

```text
0
```

---

## Undefined to Number

```javascript
Number(undefined);
```

Output:

```text
NaN
```

---

## NaN

Means:

```text
Not a Number
```

Interesting fact:

```javascript
typeof NaN;
```

Output:

```text
number
```

---

# 5. Operations

## Arithmetic Operators

```javascript
+
-
*
/
%
**
```

Examples:

```javascript
2 + 2;
2 - 2;
2 * 2;
2 / 2;
2 % 2;
2 ** 3;
```

---

## String Concatenation

```javascript
"1" + 2;
```

Output:

```text
"12"
```

---

```javascript
1 + "2";
```

Output:

```text
"12"
```

---

```javascript
"1" + 2 + 2;
```

Output:

```text
"122"
```

---

```javascript
1 + 2 + "2";
```

Output:

```text
"32"
```

---

## Increment Operators

### Postfix

```javascript
x++;
```

Uses value first and then increments.

### Prefix

```javascript
++x;
```

Increments first and then uses value.

---

# 6. Comparisons

Comparison operators compare values.

```javascript
>
<
>=
<=
==
!=
===
```

---

## Loose Equality

```javascript
"2" == 2;
```

Output:

```text
true
```

JavaScript performs type conversion.

---

## Strict Equality

```javascript
"2" === 2;
```

Output:

```text
false
```

Checks:

* Value
* Data Type

Always prefer strict equality.

---

## Strange Null Comparisons

```javascript
null == 0;
```

Output:

```text
false
```

---

```javascript
null >= 0;
```

Output:

```text
true
```

Reason:

Equality and comparison operators behave differently internally.

Avoid comparing null with numbers.

---

# 7. Memory Management

JavaScript uses:

* Stack Memory
* Heap Memory

---

## Stack Memory

Used for primitive values.

Example:

```javascript
let a = 10;
let b = a;

b = 20;
```

Output:

```text
a = 10
b = 20
```

A copy is created.

---

## Heap Memory

Used for:

* Objects
* Arrays
* Functions

Example:

```javascript
const user1 = {
  name: "Suryansh"
};

const user2 = user1;

user2.name = "John";
```

Both references point to the same object.

---

# 8. Strings

Strings represent textual data.

---

## Template Literals

Preferred way of creating dynamic strings.

```javascript
const name = "Suryansh";

console.log(`Hello ${name}`);
```

Output:

```text
Hello Suryansh
```

---

## Important String Methods

### length

Returns total number of characters.

```javascript
str.length
```

---

### charAt()

Returns character at index.

```javascript
str.charAt(0)
```

---

### at()

Supports negative indexing.

```javascript
str.at(-1)
```

---

### indexOf()

Returns index of first occurrence.

```javascript
str.indexOf("a")
```

Returns `-1` if not found.

---

### includes()

Checks existence.

```javascript
str.includes("Java")
```

Returns true or false.

---

### startsWith()

```javascript
str.startsWith("Java")
```

---

### endsWith()

```javascript
str.endsWith("Script")
```

---

### slice()

Supports negative indexing.

```javascript
str.slice(0, 4);
str.slice(-4);
```

---

### substring()

Negative values become zero.

```javascript
str.substring(0, 4);
```

---

### trim()

Removes spaces from beginning and end.

```javascript
str.trim();
```

---

### replace()

```javascript
str.replace("Java", "Type");
```

---

### replaceAll()

```javascript
str.replaceAll("a", "b");
```

---

### split()

Converts string into array.

```javascript
"HTML,CSS,JS".split(",");
```

Output:

```javascript
["HTML", "CSS", "JS"]
```

---

# 9. Numbers

JavaScript stores all normal numeric values using Number type.

---

## toString()

```javascript
num.toString();
```

Converts number to string.

---

## toFixed()

```javascript
99.999.toFixed(2);
```

Output:

```text
100.00
```

Useful for prices.

---

## toPrecision()

```javascript
123.456.toPrecision(3);
```

Controls significant digits.

---

## toLocaleString()

```javascript
1000000 .toLocaleString("en-IN");
```

Output:

```text
10,00,000
```

---

# 10. Math Object

Math is a built-in object providing mathematical functionality.

---

## Useful Methods

### Math.abs()

```javascript
Math.abs(-5);
```

Output:

```text
5
```

---

### Math.round()

Rounds to nearest integer.

---

### Math.ceil()

Always rounds upward.

---

### Math.floor()

Always rounds downward.

---

### Math.min()

Returns smallest value.

---

### Math.max()

Returns largest value.

---

### Math.random()

Returns random value between:

```text
0 <= value < 1
```

---

## Random Number Formula

```javascript
Math.floor(
  Math.random() * (max - min + 1)
) + min;
```

Most common interview formula.

---

# 11. Dates

Date object is used to work with dates and times.

---

## Current Date

```javascript
const date = new Date();
```

---

## Current Timestamp

```javascript
Date.now();
```

Returns milliseconds since:

```text
1 January 1970 UTC
```

---

## Useful Methods

```javascript
getDate()
getDay()
getMonth()
getFullYear()
getHours()
getMinutes()
getSeconds()
getTime()
```

---

## Month Index

```text
0 = January
11 = December
```

Use:

```javascript
getMonth() + 1
```

---

## Day Index

```text
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
```

---

# 12. Arrays 

Arrays are special objects used to store multiple values in a single variable.

Unlike many programming languages, JavaScript arrays:

* Are resizable.
* Can store mixed data types.
* Use zero-based indexing.
* Are reference types (stored in Heap Memory).

Example:

```javascript
const arr = [1, 2, 3, 4, 5];
```

---

# Array Characteristics

## Resizable

Arrays can grow or shrink dynamically.

```javascript
const arr = [1, 2, 3];

arr.push(4);

console.log(arr);
```

Output:

```text
[1, 2, 3, 4]
```

---

## Mixed Data Types

JavaScript arrays can contain multiple data types.

```javascript
const arr = [
  "Suryansh",
  22,
  true,
  null
];
```

---

# Shallow Copy vs Deep Copy

## Shallow Copy

A shallow copy copies the top-level structure, but nested objects share the same reference.

```javascript
const original = [{ name: "Suryansh" }];

const copy = [...original];

copy[0].name = "John";

console.log(original);
```

Output:

```javascript
[{ name: "John" }]
```

Both arrays point to the same object.

---

## Deep Copy

Creates completely independent copies.

Changes in one object do not affect the other.

---

# Creating Arrays

## Array Literal

Most common method.

```javascript
const arr = [1, 2, 3];
```

---

## Array Constructor

```javascript
const arr = new Array(1, 2, 3);
```

Usually avoid this style.

---

# Accessing Elements

Arrays use zero-based indexing.

```javascript
const arr = [1, 2, 3];

console.log(arr[0]);
```

Output:

```text
1
```

---

# Array Methods

## push()

Adds element at the end.

```javascript
const arr = [1, 2, 3];

arr.push(4);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## pop()

Removes last element.

```javascript
arr.pop();
```

---

## unshift()

Adds element at beginning.

```javascript
arr.unshift(0);
```

Output:

```javascript
[0, 1, 2, 3]
```

### Note

Less efficient because all elements must shift right.

---

## shift()

Removes first element.

```javascript
arr.shift();
```

---

# Searching Methods

## includes()

Checks whether an element exists.

```javascript
arr.includes(3);
```

Output:

```text
true
```

Returns:

```text
true
false
```

---

## indexOf()

Returns the index of an element.

```javascript
arr.indexOf(3);
```

Output:

```text
2
```

If element does not exist:

```javascript
arr.indexOf(100);
```

Output:

```text
-1
```

---

# join()

Converts array into string.

```javascript
const arr = [1, 2, 3];

const result = arr.join();
```

Output:

```text
"1,2,3"
```

Type:

```javascript
typeof result;
```

Output:

```text
string
```

---

# Slice vs Splice

Most important array interview topic.

---

## slice()

Returns a portion of an array.

Does NOT modify original array.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.slice(1, 3);
```

Output:

```javascript
[2, 3]
```

Original:

```javascript
[1, 2, 3, 4, 5]
```

unchanged.

---

## splice()

Removes elements from original array.

Modifies original array.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.splice(1, 3);
```

Output:

```javascript
[2, 3, 4]
```

Original Array:

```javascript
[1, 5]
```

changed.

---

# Merging Arrays

## push()

```javascript
marvel.push(dc);
```

Output:

```javascript
[
  "thor",
  "ironman",
  ["batman", "flash"]
]
```

Creates nested array.

---

## concat()

Returns new merged array.

```javascript
const all = marvel.concat(dc);
```

---

## Spread Operator

Most modern approach.

```javascript
const all = [...marvel, ...dc];
```

Output:

```javascript
[
  "thor",
  "ironman",
  "batman",
  "flash"
]
```

---

# flat()

Flattens nested arrays.

```javascript
const arr = [
  1,
  2,
  [3, 4],
  [5, [6, 7]]
];
```

```javascript
arr.flat(Infinity);
```

Output:

```javascript
[
  1,
  2,
  3,
  4,
  5,
  6,
  7
]
```

---

# Array Utility Methods

## Array.isArray()

Checks whether value is array.

```javascript
Array.isArray("Suryansh");
```

Output:

```text
false
```

---

## Array.from()

Creates array from iterable values.

```javascript
Array.from("Suryansh");
```

Output:

```javascript
[
 "S",
 "u",
 "r",
 "y",
 "a",
 "n",
 "s",
 "h"
]
```

---

### Array.from

```javascript
Array.from({
  name: "Suryansh"
});
```

Output:

```javascript
[]
```

Reason:

Object is not iterable.

Need explicit keys or values.

```javascript
Array.from(
  Object.keys(obj)
);
```

or

```javascript
Array.from(
  Object.values(obj)
);
```

---

## Array.of()

Creates array from values.

```javascript
Array.of(100, 200, 300);
```

Output:

```javascript
[100, 200, 300]
```

--- 

# 13. Objects in JavaScript

Objects are collections of key-value pairs used to store related data and functionality.

Unlike arrays, which store values using indexes, objects store values using named properties (keys).

Example:

```javascript
const user = {
  name: "Suryansh",
  age: 24,
  isLoggedIn: true
};
```

In the above example:

```javascript
name          -> key
"Suryansh"    -> value

age           -> key
24            -> value
```

Objects are reference data types and are stored in Heap Memory.

---

# Why Use Objects?

Without Objects:

```javascript
const name = "Suryansh";
const age = 24;
const city = "Lucknow";
```

With Objects:

```javascript
const user = {
  name: "Suryansh",
  age: 24,
  city: "Lucknow"
};
```

Objects keep related data together and make code easier to manage.

---

# Creating Objects

There are two common ways to create objects.

## Object Literal

Most common approach.

```javascript
const user = {
  name: "Suryansh",
  age: 24
};
```

Objects created using object literals are generally referred to as non-singleton objects.

---

## Constructor Method

```javascript
const user = new Object();
```

This creates a singleton object.

Another constructor approach:

```javascript
Object.create();
```

---

# Accessing Object Properties

## Dot Notation

```javascript
console.log(user.name);
```

Output:

```text
Suryansh
```

Most commonly used.

---

## Bracket Notation

```javascript
console.log(user["name"]);
```

Output:

```text
Suryansh
```

Bracket notation is required when:

### Property Contains Spaces

```javascript
const user = {
  "full name": "Suryansh Kushwaha"
};

console.log(user["full name"]);
```

### Using Symbols

```javascript
const mySym = Symbol("key1");

const user = {
  [mySym]: "value"
};

console.log(user[mySym]);
```

### Dynamic Keys

```javascript
const key = "name";

console.log(user[key]);
```

---

# Updating Object Properties

Objects are mutable by default.

```javascript
user.email = "new@gmail.com";
```

Existing values can be changed.

---

# Object.freeze()

Prevents modifications to an object.

```javascript
Object.freeze(user);
```

After freezing:

```javascript
user.name = "John";
```

No changes will occur.

Use when object data should remain constant.

---

# Symbols in Objects

Symbols provide unique property keys.

```javascript
const mySym = Symbol("key1");

const user = {
  [mySym]: "secretValue"
};
```

Important:

```javascript
const user = {
  mySym: "value"
};
```

This creates a normal string key.

To use Symbol correctly:

```javascript
[mySym]
```

must be used.

---

# Object Methods

Objects can store functions.

Functions inside objects are called methods.

Example:

```javascript
const user = {
  greeting: function () {
    console.log("Hello");
  }
};
```

Calling Method:

```javascript
user.greeting();
```

---

# The this Keyword

Inside object methods, `this` refers to the current object.

Example:

```javascript
const user = {
  name: "Suryansh",

  greeting() {
    console.log(
      `Hello ${this.name}`
    );
  }
};
```

Output:

```text
Hello Suryansh
```

---

# Nested Objects

Objects can contain other objects.

Example:

```javascript
const regularUser = {
  fullname: {
    userfullname: {
      firstname: "Sam",
      lastname: "Kumar"
    }
  }
};
```

Access:

```javascript
regularUser.fullname.userfullname.firstname
```

Output:

```text
Sam
```

---

# Optional Chaining

Optional Chaining (`?.`) safely accesses nested properties.

Example:

```javascript
regularUser.fullname?.userfullname.firstname
```

Why use it?

If a property does not exist:

```javascript
regularUser.address.city
```

JavaScript throws an error.

Using:

```javascript
regularUser.address?.city
```

returns:

```javascript
undefined
```

instead of throwing an error.

Very common in React and API responses.

---

# Merging Objects

## Object.assign()

Used to merge multiple objects.

```javascript
const obj3 =
  Object.assign({}, obj1, obj2);
```

Returns a new merged object.

---

## Spread Operator

Modern and preferred approach.

```javascript
const obj3 = {
  ...obj1,
  ...obj2
};
```

Cleaner and easier to read.

---

# Array of Objects

One of the most common real-world data structures.

Example:

```javascript
const users = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 2,
    email: "b@gmail.com"
  }
];
```

Access:

```javascript
users[0].email
```

This structure is heavily used in:

* APIs
* Databases
* React Applications
* Node.js Applications

---

# Object Utility Methods

## Object.keys()

Returns all keys of an object as an array.

```javascript
Object.keys(user);
```

Example Output:

```javascript
[
  "id",
  "name",
  "isLoggedIn"
]
```

---

## Object.values()

Returns all values of an object.

```javascript
Object.values(user);
```

Example Output:

```javascript
[
  "123abc",
  "Sam",
  false
]
```

---

## Object.entries()

Returns key-value pairs.

```javascript
Object.entries(user);
```

Example Output:

```javascript
[
  ["id", "123abc"],
  ["name", "Sam"]
]
```

Useful when looping over objects.

---

## hasOwnProperty()

Checks whether a property exists directly inside an object.

```javascript
user.hasOwnProperty("name");
```

Output:

```javascript
true
```

Returns:

```javascript
true
or
false
```

---

# Object Destructuring

Destructuring extracts values from objects into variables.

Example:

```javascript
const course = {
  coursename: "JS in Hindi",
  price: 0
};

const {
  coursename
} = course;
```

Now:

```javascript
console.log(coursename);
```

Output:

```text
JS in Hindi
```

---

## Renaming During Destructuring

```javascript
const {
  coursename: language
} = course;
```

Now:

```javascript
console.log(language);
```

Output:

```text
JS in Hindi
```

---

# Real-World Importance

Objects are everywhere in JavaScript.

Examples:

### React Props

```javascript
{
  name: "Suryansh",
  age: 24
}
```

### API Response

```javascript
{
  success: true,
  data: {}
}
```

### Database Record

```javascript
{
  _id: "123",
  title: "JavaScript"
}
```

Understanding objects is essential before learning:

* Functions
* DOM Manipulation
* React
* APIs
* Node.js

---

### Difference between Dot Notation and Bracket Notation?

Dot notation is simpler.

Bracket notation is required for:

* Spaces in property names
* Symbols
* Dynamic keys

---

### What does Object.freeze() do?

Prevents modification of an object.

---

### What does Object.keys() return?

Returns an array of keys.

---

### What does Object.values() return?

Returns an array of values.

---

### What does Object.entries() return?

Returns an array of key-value pairs.

---

### What is Optional Chaining?

A safe way to access nested properties without causing errors.

---

### What is Destructuring?

A syntax used to extract values from objects into variables.

---

### What does this refer to inside an object?

The current object.

---

# 14.  Functions in JavaScript

A function is a reusable block of code that performs a specific task.

Functions help avoid code repetition and make programs modular and easier to maintain.

---

# Function Declaration

A function can be declared using the `function` keyword.

```javascript
function sayMyName() {
  console.log("Suryansh");
}
```

Calling the function:

```javascript
sayMyName();
```

---

# Function Reference vs Function Execution

```javascript
sayMyName;
```

This is a function reference.

The function is not executed.

```javascript
sayMyName();
```

This executes the function.

---

# Parameters and Arguments

Parameters are variables defined in the function declaration.

```javascript
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
```

Here:

```javascript
number1
number2
```

are parameters.

Arguments are values passed when calling a function.

```javascript
addTwoNumbers(4, 8);
```

Here:

```javascript
4
8
```

are arguments.

---

# Return Statement

The `return` keyword sends a value back from a function.

Example:

```javascript
function add(number1, number2) {
  return number1 + number2;
}
```

```javascript
const result = add(10, 10);

console.log(result);
```

Output:

```text
20
```

---

# Function Without Return

```javascript
function add(number1, number2) {
  console.log(number1 + number2);
}
```

```javascript
const result = add(10, 10);

console.log(result);
```

Output:

```text
20
undefined
```

Reason:

`console.log()` only prints the value.

Nothing is returned from the function.

---

# Default Parameters

Default values are used when no argument is provided.

```javascript
function loginUserMessage(username = "Sam") {
  return `${username} just logged in`;
}
```

```javascript
loginUserMessage();
```

Output:

```text
Sam just logged in
```

---

# Early Return

Used to stop function execution.

```javascript
function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} logged in`;
}
```

---

# Rest Operator (...)

The rest operator collects multiple arguments into an array.

```javascript
function calculateCartPrice(...num1) {
  return num1;
}
```

```javascript
calculateCartPrice(100, 200, 300);
```

Output:

```javascript
[100, 200, 300]
```

---

# Rest Operator with Multiple Parameters

```javascript
function calculateCartPrice(
  val1,
  val2,
  ...num1
) {
  return num1;
}
```

```javascript
calculateCartPrice(
  200,
  400,
  500,
  800
);
```

Output:

```javascript
[500, 800]
```

First values are assigned normally.

Remaining values go into the rest parameter.

---

# Passing Objects to Functions

Objects can be passed directly into functions.

```javascript
const user = {
  username: "Suryansh",
  price: 199
};
```

```javascript
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username}`
  );
}
```

```javascript
handleObject(user);
```

---

Direct object passing:

```javascript
handleObject({
  username: "Sam",
  price: 999
});
```

---

# Passing Arrays to Functions

Arrays can also be passed as arguments.

```javascript
const myArray = [
  200,
  400,
  100,
  600
];
```

```javascript
function returnSecondValue(arr) {
  return arr[1];
}
```

```javascript
returnSecondValue(myArray);
```

Output:

```text
400
```

---

# The this Keyword

Inside an object, `this` refers to the current object.

```javascript
const user = {
  username: "Suryansh",

  welcomeMessage() {
    console.log(
      `${this.username} welcome`
    );
  }
};
```

Output:

```text
Suryansh welcome
```

---

## Why use this?

Without `this`:

```javascript
console.log(username);
```

JavaScript will look for a global variable.

Using:

```javascript
this.username
```

ensures JavaScript uses the object's property.

---

# Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

Traditional Function:

```javascript
function addTwo(a, b) {
  return a + b;
}
```

Arrow Function:

```javascript
const addTwo = (a, b) => {
  return a + b;
};
```

---

# Explicit Return

When using curly braces `{}` you must use `return`.

```javascript
const addTwo = (a, b) => {
  return a + b;
};
```

---

# Implicit Return

When using a single expression, return is automatic.

```javascript
const addTwo = (a, b) => a + b;
```

or

```javascript
const addTwo = (a, b) => (
  a + b
);
```

---

# Returning Objects from Arrow Functions

Objects must be wrapped in parentheses.

```javascript
const user = () => ({
  username: "Suryansh"
});
```

Without parentheses JavaScript treats `{}` as a function body.

---

# Traditional Function vs Arrow Function

| Traditional               | Arrow                        |
| ------------------------- | ---------------------------- |
| Uses function keyword     | Uses =>                      |
| Has its own this          | Does not create its own this |
| More common in older code | Common in React              |

---

# Immediately Invoked Function Expression (IIFE)

An IIFE is a function that executes immediately after being created.

Syntax:

```javascript
(function () {
  console.log("DB Connected");
})();
```

---

# Why Use IIFE?

Sometimes global variables pollute the application.

IIFE creates a private scope.

Benefits:

* Avoid global scope pollution.
* Execute code immediately.
* Create isolated scope.

---

# Named IIFE

```javascript
(function db() {
  console.log("DB Connected");
})();
```

---

# Arrow IIFE

```javascript
((name) => {
  console.log(`Hi ${name}`);
})("Suryansh");
```

---

# Important Notes

## this inside Browser

```javascript
console.log(this);
```

Returns:

```javascript
window
```

in browsers.

---

## this inside Node.js

```javascript
console.log(this);
```

Returns:

```javascript
{}
```

at the top level.

---

### Difference between Parameters and Arguments?

Parameters are variables in function definition.

Arguments are values passed during function call.

---

### Difference between console.log() and return?

`console.log()` prints a value.

`return` sends a value back from a function.

---

### What does Rest Operator do?

Collects multiple values into an array.

---

### What does this refer to inside an object?

The current object.

---

### Difference between Arrow Function and Traditional Function?

Arrow functions use shorter syntax and do not have their own `this`.

---

# 15. Scope and Hoisting in JavaScript

Scope determines where variables can be accessed in a program.

JavaScript mainly has:

1. Global Scope
2. Block Scope
3. Function Scope
4. Nested Scope (Lexical Scope)

Understanding scope is essential because it controls variable visibility and helps prevent accidental modifications.

---

# Global Scope

Variables declared outside any function or block belong to the global scope.

Example:

```javascript
let a = 300;

function test() {
  console.log(a);
}

test();
```

Output:

```text
300
```

Global variables can be accessed from anywhere in the program.

---

# Block Scope

A block is any code written inside curly braces `{}`.

Example:

```javascript
if (true) {
  let a = 10;
  const b = 20;
}
```

Variables declared using:

```javascript
let
const
```

exist only inside that block.

Example:

```javascript
if (true) {
  let a = 10;
}

console.log(a);
```

Output:

```text
ReferenceError
```

Because `a` only exists inside the block.

---

# Function Scope

Variables declared inside a function can only be accessed within that function.

Example:

```javascript
function greet() {
  const username = "Suryansh";
}

console.log(username);
```

Output:

```text
ReferenceError
```

The variable is unavailable outside the function.

---

# The Problem with var

`var` is function-scoped rather than block-scoped.

Example:

```javascript
if (true) {
  var c = 30;
}

console.log(c);
```

Output:

```text
30
```

Even though `c` was declared inside the block, it becomes accessible outside.

This behavior can lead to bugs.

Because of this, modern JavaScript development prefers:

```javascript
let
const
```

over:

```javascript
var
```

---

# Global Scope vs Block Scope

Example:

```javascript
let a = 300;

if (true) {
  let a = 10;

  console.log(a);
}

console.log(a);
```

Output:

```text
10
300
```

The inner `a` and outer `a` are different variables.

The inner variable shadows the outer variable.

This concept is called:

```text
Variable Shadowing
```

---

# Nested Scope

Functions can be nested inside other functions.

Example:

```javascript
function one() {
  const username = "Nikhil";

  function two() {
    console.log(username);
  }

  two();
}
```

Output:

```text
Nikhil
```

The inner function can access variables of the outer function.

---

# Lexical Scope

JavaScript uses lexical scoping.

This means a function can access variables defined in its parent scope.

Example:

```javascript
function one() {
  const username = "Nikhil";

  function two() {
    console.log(username);
  }

  two();
}
```

Child functions can access parent variables.

Parent functions cannot access child variables.

Example:

```javascript
function one() {
  function two() {
    const website = "youtube";
  }

  console.log(website);
}
```

Output:

```text
ReferenceError
```

---

# Nested Blocks

The same rule applies to nested blocks.

Example:

```javascript
if (true) {
  const username = "Suryansh";

  if (username === "Suryansh") {
    const website = "youtube";

    console.log(username + website);
  }
}
```

Output:

```text
Suryanshyoutube
```

The inner block can access outer variables.

Outer blocks cannot access inner variables.

---

# What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

It allows certain declarations to be used before they appear in code.

---

# Function Hoisting

Function declarations are fully hoisted.

Example:

```javascript
addOne(5);

function addOne(num) {
  return num + 1;
}
```

Output:

```text
6
```

Even though the function is called before its definition, JavaScript allows it.

---

# Function Expression

Example:

```javascript
const addTwo = function (num) {
  return num + 2;
};
```

This is called a function expression because the function is stored in a variable.

---

# Function Expressions are NOT Fully Hoisted

Example:

```javascript
addTwo(5);

const addTwo = function (num) {
  return num + 2;
};
```

Output:

```text
ReferenceError:
Cannot access 'addTwo'
before initialization
```

Reason:

Only the variable declaration is hoisted.

The function assignment happens later.

---

# Function Declaration vs Function Expression

## Function Declaration

```javascript
function greet() {
  console.log("Hello");
}
```

Characteristics:

* Fully hoisted
* Can be called before definition

---

## Function Expression

```javascript
const greet = function () {
  console.log("Hello");
};
```

Characteristics:

* Stored inside variable
* Cannot be called before initialization

---

# Why is Hoisting Important?

Understanding hoisting helps avoid:

* Reference errors
* Undefined values
* Unexpected program behavior

It is one of the most frequently asked JavaScript interview topics.

---

# Common Mistakes

## Mistake 1

```javascript
if (true) {
  let a = 10;
}

console.log(a);
```

Thinking `a` is accessible outside.

It is not.

---

## Mistake 2

```javascript
if (true) {
  var a = 10;
}

console.log(a);
```

Forgetting that `var` escapes block scope.

---

## Mistake 3

```javascript
addTwo();

const addTwo = function () {};
```

Assuming function expressions behave like function declarations.

They do not.

---

# 16. How JavaScript Executes Code & Call Stack

Before running any JavaScript program, the JavaScript Engine (such as V8 in Chrome and Node.js) goes through a process to execute the code.

Understanding this process helps explain concepts like:

* Hoisting
* Scope
* Functions
* `this` keyword
* Closures
* Event Loop

This is one of the core concepts of JavaScript.

---

# JavaScript Execution Context

Everything in JavaScript runs inside an **Execution Context**.

An Execution Context is an environment where JavaScript code is evaluated and executed.

JavaScript creates an execution context whenever a program or function runs.

There are three types of execution contexts:

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (Rarely Used)

---

# 1. Global Execution Context (GEC)

The Global Execution Context is created first whenever a JavaScript program starts.

There is **only one Global Execution Context** for a program.

In browsers:

```javascript
this === window
```

In Node.js:

```javascript
this === {}
```

Everything declared outside functions belongs to the Global Execution Context.

Example:

```javascript
const name = "Suryansh";

function greet() {
    console.log("Hello");
}
```

Both `name` and `greet()` are created inside the Global Execution Context.

---

# 2. Function Execution Context (FEC)

Whenever a function is called, JavaScript creates a **new Function Execution Context**.

Example:

```javascript
function one() {
    console.log("One");
}

one();
```

Calling `one()` creates a new execution context.

After the function finishes execution, its execution context is destroyed.

Every function call gets its own execution context.

---

# 3. Eval Execution Context

Created when using the `eval()` function.

Example:

```javascript
eval("console.log('Hello')");
```

This is rarely used in modern JavaScript because of security and performance concerns.

---

# How JavaScript Executes Code

JavaScript executes code in **two phases**.

## Phase 1: Memory Creation Phase

Also called:

* Creation Phase
* Memory Allocation Phase

In this phase JavaScript scans the entire program before executing any line.

It allocates memory for variables and functions.

### Variables

Variables declared with:

```javascript
var
let
const
```

are allocated memory.

Initially:

```javascript
var x = undefined;
```

For `let` and `const`, memory is allocated but they remain in the **Temporal Dead Zone (TDZ)** until initialized.

### Functions

Function declarations are stored completely in memory.

This is why function declarations are hoisted.

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

The entire function is available before execution starts.

---

## Phase 2: Execution Phase

During this phase JavaScript executes the code line by line.

Variables receive actual values.

Functions execute when they are called.

Example:

```javascript
let x = 10;
```

During Memory Phase:

```text
x → undefined
```

During Execution Phase:

```text
x → 10
```

---

# Example of Execution

```javascript
let val1 = 10;
let val2 = 5;

function add(a, b) {
    return a + b;
}

let result = add(val1, val2);
```

### Step 1

Global Execution Context created.

---

### Step 2

Memory Phase

```text
val1 → undefined

val2 → undefined

add → Entire Function

result → undefined
```

---

### Step 3

Execution Phase

```text
val1 = 10

val2 = 5

add() called

New Function Execution Context created

a = 10

b = 5

return 15

Function Context destroyed

result = 15
```

---

# Call Stack

JavaScript uses a **Call Stack** to keep track of function execution.

It follows the **LIFO (Last In, First Out)** principle.

The last function added to the stack is executed first.

---

# How Call Stack Works

Example:

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Call Stack:

```text
Start

Global()

↓

one()

↓

two()

↓

three()

↓

console.log()

↓

three() removed

↓

two() removed

↓

one() removed

↓

Global() removed
```

Every function is pushed onto the stack.

After finishing execution, it is popped from the stack.

---

# Stack Overflow

When functions keep calling themselves without stopping, the Call Stack keeps growing.

Eventually JavaScript throws:

```text
RangeError:
Maximum call stack size exceeded
```

This commonly happens in infinite recursion.

Example:

```javascript
function test() {
    test();
}

test();
```

---

# Why is Execution Context Important?

Execution Context helps JavaScript manage:

* Variables
* Functions
* Scope
* Memory Allocation
* Function Calls

Without execution contexts, JavaScript would not know where variables or functions belong.

---

# Real-World Importance

Execution Context is the foundation for understanding:

* Hoisting
* Scope
* Closures
* `this`
* Event Loop
* Async JavaScript
* Promises

Almost every advanced JavaScript concept depends on it.

---

# Common Mistakes

## Mistake 1

Thinking JavaScript executes code immediately.

Actually:

JavaScript first performs the Memory Creation Phase, then the Execution Phase.

---

## Mistake 2

Thinking function declarations are executed first.

Actually:

They are stored during the Memory Phase and executed only when called.

---

## Mistake 3

Confusing Execution Context with Call Stack.

Execution Context stores the environment.

Call Stack manages the order of execution.

---

# 17. Control Flow in JavaScript

Control Flow determines the order in which JavaScript executes statements. It allows a program to make decisions based on conditions.

JavaScript provides the following conditional statements:

* `if`
* `if...else`
* `else if`
* `switch`

---

# if Statement

The `if` statement executes a block of code only when the specified condition evaluates to `true`.

### Syntax

```javascript
if (condition) {
  // code
}
```

### Example

```javascript
const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Welcome!");
}
```

### Output

```text
Welcome!
```

---

# if...else Statement

Use `if...else` when there are exactly two possible outcomes.

```javascript
const temperature = 44;

if (temperature < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than or equal to 50");
}
```

---

# else if Statement

Use `else if` when multiple conditions need to be checked.

JavaScript evaluates conditions from top to bottom.

The first matching condition is executed.

```javascript
const balance = 1000;

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else {
  console.log("Balance is sufficient");
}
```

---

# Block Scope

Variables declared using `let` and `const` exist only inside the block where they are declared.

```javascript
if (score > 100) {
  const power = "Fly";
}

console.log(power);
```

Output:

```text
ReferenceError
```

---

# Strict Comparison (`===`)

The strict equality operator compares both **value** and **data type**.

```javascript
2 === 2      // true
2 === "2"    // false
```

Always prefer `===` over `==` to avoid unexpected type coercion.

---

# Logical Operators

## Logical AND (`&&`)

Returns `true` only if **all conditions** are true.

```javascript
if (userLogged && debitCard) {
  console.log("Purchase Allowed");
}
```

---

## Logical OR (`||`)

Returns `true` if **at least one condition** is true.

```javascript
if (googleLogin || emailLogin) {
  console.log("Welcome");
}
```

---

# switch Statement

The `switch` statement compares one value against multiple possible cases.

It is often cleaner than writing many `else if` statements.

### Syntax

```javascript
switch (value) {
  case 1:
    break;

  default:
}
```

### Example

```javascript
const month = 2;

switch (month) {
  case 1:
    console.log("February");
    break;

  case 2:
    console.log("March");
    break;

  default:
    console.log("Invalid Month");
}
```

---

## break Statement

`break` immediately exits the `switch` statement.

Without `break`, JavaScript continues executing the following cases. This behavior is called **fall-through**.

---

## default Case

The `default` block executes when no case matches.

---

# Best Practices

* Prefer `===` over `==`.
* Use `switch` when comparing a single variable with many fixed values.
* Always include `break` in every `switch` case.
* Avoid writing complex nested `if` statements.

---

# Interview Questions

### Difference between `==` and `===`?

`==` compares only values after type conversion.

`===` compares both value and data type.

### When should you use `switch` instead of `if...else`?

Use `switch` when comparing one variable against many constant values.

### What happens if `break` is omitted?

Execution continues into the next case (fall-through).

---

# 18. Truthy & Falsy Values

Every JavaScript value has an inherent boolean value when evaluated in a condition.

---

# Falsy Values

JavaScript has only **8 falsy values**.

```text
false
0
-0
0n
""
null
undefined
NaN
```

All other values are truthy.

---

# Truthy Values

Examples:

```javascript
"0"
"false"
" "
[]
{}
function(){}
```

Even empty arrays (`[]`) and empty objects (`{}`) are **truthy**.

---

# Checking an Empty Array

Since an empty array is truthy, use `.length`.

```javascript
const fruits = [];

if (fruits.length === 0) {
  console.log("Array is empty");
}
```

---

# Checking an Empty Object

Use `Object.keys()`.

```javascript
const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}
```

---

# Equality Confusion

Loose equality performs type coercion.

```javascript
false == 0      // true
false == ""     // true
0 == ""         // true
```

Strict equality does not.

```javascript
false === 0     // false
0 === ""        // false
```

---

# Nullish Coalescing Operator (`??`)

Returns the right-hand value **only** when the left-hand value is `null` or `undefined`.

```javascript
const value = null ?? 10;

console.log(value);
```

Output:

```text
10
```

Unlike `||`, it does **not** treat `0`, `false`, or `""` as missing values.

---

# Ternary Operator

A shorthand for `if...else`.

Syntax:

```javascript
condition ? expression1 : expression2;
```

Example:

```javascript
const price = 100;

price <= 80
  ? console.log("Cheap")
  : console.log("Expensive");
```

---

# Best Practices

* Always check array length instead of `if(array)`.
* Use `Object.keys(obj).length` for empty objects.
* Prefer `??` over `||` when `0`, `false`, or `""` are valid values.
* Use ternary only for simple conditions.

---

# Interview Questions

* What are truthy and falsy values?
* Why is `[]` truthy?
* Difference between `||` and `??`?
* Difference between `==` and `===`?

---

# 19. Loops & Iteration

Loops execute a block of code repeatedly until a condition becomes false.

JavaScript provides:

* `for`
* `while`
* `do...while`
* `for...of`
* `for...in`
* `forEach()`

---

# for Loop

Best when the number of iterations is known.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

# Nested for Loop

Useful for:

* Patterns
* Matrices
* Multiplication tables

---

# break

Stops the loop immediately.

---

# continue

Skips only the current iteration.

---

# while Loop

Used when the number of iterations is unknown.

---

# do...while Loop

Always executes at least once.

---

# for...of

Used for iterable objects.

Works with:

* Arrays
* Strings
* Maps
* Sets

Does **not** work with plain objects.

---

# Map

A Map stores key-value pairs.

Features:

* Unique keys
* Preserves insertion order

---

# for...in

Used to iterate over object keys.

Can iterate arrays but returns indexes instead of values.

---

# forEach()

Executes a callback for every array element.

Characteristics:

* Returns `undefined`
* Cannot use `break`
* Cannot use `continue`
* Does not return a new array

---

# Array of Objects

Very common in:

* APIs
* Databases
* React state

Use `forEach()` or `map()` to iterate through them.

---

# Best Practices

* Use `for` when index is needed.
* Use `for...of` for arrays and strings.
* Use `for...in` for objects.
* Use `forEach()` for array iteration when no return value is needed.

---

# Interview Questions

* Difference between `for...of` and `for...in`?
* Difference between `forEach()` and `for`?
* Can `forEach()` use `break`?
* Which loop works with objects?

---

# 20. Array Higher-Order Methods

Higher-order array methods accept callback functions and simplify working with arrays.

These methods do **not** modify the original array.

---

# forEach()

Executes a callback for each element.

Returns:

```text
undefined
```

Used for logging, API calls, and side effects.

---

# filter()

Returns a new array containing only elements that satisfy a condition.

```javascript
const result = numbers.filter(num => num > 5);
```

---

# map()

Returns a new array after transforming every element.

```javascript
const result = numbers.map(num => num * 10);
```

---

# Method Chaining

Methods can be chained together.

```javascript
const result = numbers
  .map(num => num * 10)
  .filter(num => num > 50);
```

---

# reduce()

Reduces an array to a single value.

Example:

```javascript
const sum = numbers.reduce(
  (acc, curr) => acc + curr,
  0
);
```

Common uses:

* Sum
* Total Price
* Average
* Count
* Grouping

---

# Method Comparison

| Method    | Returns      | Purpose            |
| --------- | ------------ | ------------------ |
| forEach() | `undefined`  | Execute callback   |
| filter()  | New Array    | Select elements    |
| map()     | New Array    | Transform elements |
| reduce()  | Single Value | Accumulate values  |

---

# Best Practices

* Use `forEach()` for side effects.
* Use `filter()` to select data.
* Use `map()` to transform data.
* Use `reduce()` to calculate totals or combine values.
* Prefer method chaining for readable functional code.

---
