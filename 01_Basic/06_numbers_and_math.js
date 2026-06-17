// =====NUMBERS IN JAVASCRIPT =======

// Primitive Number
const score = 400;
console.log(score);

// Number Object
const balance = new Number(100);

console.log(balance);

/*
typeof score    => number
typeof balance  => object

In real projects, use primitive numbers.
*/

// ====Number Methods ============

// Convert number to string
console.log(balance.toString());

// Length after conversion
console.log(balance.toString().length);

// Fixed decimal places
console.log(balance.toFixed(2));

/*
100.00

Commonly used for:
- Prices
- Ratings
- Financial calculations
*/

// ====toPrecision()=============

const otherNumber = 123.95468;

console.log(otherNumber.toPrecision(3));

/*
Returns number with specified
significant digits.

123.95468
=> 124
*/

// ======toLocaleString()==========

const hundreds = 1000000;

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString("en-IN"));

/*
US Format: 1,000,000

Indian Format: 10,00,000
*/

// =====MATH OBJECT==========

console.log(Math);

/*Math is a built-in object that provides mathematical functions.*/

// ===Math.abs() =======

console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4

/* Converts negative value to positive.*/

// ====Math.round()========

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

/*Rounds to nearest integer.*/

// ===Math.ceil()======

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

/*Always rounds UP.*/

// ===Math.floor()=======

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

/*Always rounds DOWN.*/

// =====Math.min()=======

console.log(Math.min(10, 2, 45, 564, 21, 5454));

/*Output:2*/

// ===Math.max()=====

console.log(Math.max(115, 552, 5552, 4424));

/*Output:5552*/

// ===Math.random()====

console.log(Math.random());

/*Returns random number between:
0 (inclusive)
and
1 (exclusive)

Example:

0.1245
0.8978
0.5567
*/

// ====Random Number 1 - 10=====

console.log(Math.floor(Math.random() * 10) + 1);

/*
Math.random() * 10 => 0 to 9.999...

floor()
=> 0 to 9

+1 => 1 to 10 */

// ====Random Number Between Min & Max========

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*Formula:Math.floor(
  Math.random() * (max - min + 1)
) + min

Example:

min = 10
max = 20

Output:
10 to 20
*/

