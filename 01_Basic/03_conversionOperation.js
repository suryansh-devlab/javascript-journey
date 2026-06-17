// =============Type Conversion in JavaScript================

// let score = "33";
// let score = "33abc";
// let score = null;
let score = undefined;

// console.log("Original Value:", score);
// console.log("Original Type:", typeof score);

let isLoggedIn = 1;

// console.log("Original Value:", isLoggedIn);
// console.log("Original Type:", typeof isLoggedIn);

// Convert to Number
let valueInNumber = Number(score);

// console.log("Converted Value:", valueInNumber);
// console.log("Converted Type:", typeof valueInNumber);

// Convert to Boolean 

let booleanIsLoggedIn = Boolean(isLoggedIn); 

// console.log("Converted Value:", booleanIsLoggedIn);
// console.log("Converted Type:", typeof booleanIsLoggedIn);


/*========Conversion Results=====================

Number("33")       => 33
Number("33abc")    => NaN
Number(null)       => 0
Number(undefined)  => NaN

Number(true)       => 1
Number(false)      => 0

Boolean(1)         => true
Boolean(0)         => false
Boolean("")        => false
Boolean("Suryansh")        => true

For String conversion we use String().
====================================
NaN (Not a Number)
====================================

NaN means the conversion failed.

Example:
Number("33abc") => NaN

Interesting Fact:
typeof NaN => "number"

Check NaN:
Number.isNaN(value)

Example:
Number.isNaN(NaN) // true

===================Interview Questions=================

Q. What is Number(null)?
A. 0

Q. What is Number(undefined)?
A. NaN

Q. What is typeof NaN?
A. "number"

Q. Difference between null and undefined?

null:
- Intentional absence of a value.
- Assigned by developer.
- Number(null) => 0

undefined:
- Variable declared but not assigned.
- Assigned by JavaScript.
- Number(undefined) => NaN
*/

// ========= Operations in JavaScript ===============

let value = 3;
let negValue = -value;

console.log(negValue); // -3

// ===== Arithmetic Operators =================

console.log(2 + 2);  // Addition
console.log(2 - 2);  // Subtraction
console.log(2 * 2);  // Multiplication
console.log(2 / 2);  // Division
console.log(2 ** 3); // Exponent (2³ = 8)
console.log(5 % 2);  // Remainder

// ==== String Concatenation ================

let str1 = "Suryansh";
let str2 = " Kushwaha";

let str3 = str1 + str2;

console.log(str3);

// ===== Type Coercion ================

console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

/*
Rule:

If a string appears first,
everything after it becomes a string.

"1" + 2 + 2
=> "12" + 2
=> "122"

1 + 2 + "2"
=> 3 + "2"
=> "32"
*/

// ==== Unary Plus Operator =================

console.log(+true); // 1
console.log(+false); // 0

// console.log(true+); // Syntax Error

// ====== Multiple Assignment ============

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4

// ==== Increment Operators =========

let gameCounter = 100;

// Postfix Increment
gameCounter++;
console.log(gameCounter); // 101

// Prefix Increment
++gameCounter;
console.log(gameCounter); // 102

/* ==== Prefix vs Postfix =====

Postfix (x++)
- Return current value
- Then increment

Prefix (++x)
- Increment first
- Then return value

Example:
*/

let x = 5;

console.log(x++); // 5
console.log(x);   // 6

let y = 5;

console.log(++y); // 6
console.log(y);   // 6

/* ========== Interview Notes

JavaScript automatically converts
values when different data types
are used together. This is called
Type Coercion.
*/