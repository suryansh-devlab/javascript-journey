//=== Comparison Operators ==========

console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false

// === Type Conversion During Comparison =================

// JavaScript automatically converts strings to numbers
// when using comparison operators.

console.log("2" > 1); // true
console.log("02" > 1); // true

/*
Avoid comparing different data types.
It can lead to confusing results because
JavaScript performs implicit type conversion.
*/

// === Null Comparisons =========

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null < 0); // false

/*
Why?

Equality (==) and comparisons (<, >, <=, >=)
work differently in JavaScript.

null == 0
=> false

null >= 0
=> true

Because comparison operators convert
null to 0 before comparing.
*/

// === Loose Equality vs Strict Equality ======

// Loose Equality (==)
// Compares values after type conversion

console.log("2" == 2); // true

// Strict Equality (===)
// Compares both value and datatype

console.log("2" === 2); // false

/*=== Interview Notes ===========

==  -> Checks value only
=== -> Checks value and datatype

"2" == 2
=> true

"2" === 2
=> false

null == 0
=> false

null >= 0
=> true

undefined == null
=> true

undefined === null
=> false

Always prefer === in production code.
*/
