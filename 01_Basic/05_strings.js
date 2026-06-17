// ===== STRING METHODS NOTES ===========

const str = "JavaScript";
const name = "   Suryansh   ";

// === 1. length ==

console.log(str.length); // 10

/*
Returns the number of characters.

"JavaScript".length
=> 10
*/

// === 2. charAt() ====

console.log(str.charAt(0)); // J

/*
Returns character at a given index.
*/

// ===== 3. at() ===

console.log(str.at(0)); // J
console.log(str.at(-1)); // t

/*
Supports negative indexing.
*/

// === 4. indexOf() ===

console.log(str.indexOf("S")); // 4

/*
Returns first occurrence index.
Returns -1 if not found.
*/

// == 5. includes()  ===

console.log(str.includes("Script")); // true

/*
Checks whether a string exists.
Returns true or false.
*/

// === 6. startsWith() ===

console.log(str.startsWith("Java")); // true

/*
Checks if string starts with given text.
*/

// ==== 7. endsWith() =====

console.log(str.endsWith("Script")); // true

/*
Checks if string ends with given text.
*/

// === 8. slice() ========

console.log(str.slice(0, 4)); // Java
console.log(str.slice(-6)); // Script

/*
slice(start, end)

- End index not included.
- Supports negative indexes.
*/

// ===  9. substring() =============

console.log(str.substring(0, 4)); // Java

/*
substring(start, end)

- End index not included.
- Negative values become 0.
*/

// ==== 10. replace() ====

console.log(str.replace("Java", "Type")); // TypeScript

/*
Replaces first occurrence.
*/

// ====  11. replaceAll() =======

const fruits = "apple apple apple";

console.log(fruits.replaceAll("apple", "mango"));

/*
Replaces all occurrences.
*/

// ==== 12. trim() ======

console.log(name.trim());

/*
Removes spaces from:
- Beginning
- End
*/

// ==== 13. toUpperCase() ======

console.log(str.toUpperCase());

/*
Converts string to uppercase.
*/

// == 14. toLowerCase() ========

console.log(str.toLowerCase());

/*
Converts string to lowercase.
*/

// ===  15. split() ====

const data = "HTML,CSS,JS";

console.log(data.split(","));

/*
Converts string into array.

Output:
["HTML", "CSS", "JS"]
*/

// === 16. concat()  =====

const firstName = "Suryansh";
const lastName = "Kushwaha";

console.log(firstName.concat(" ", lastName));

/*
Joins strings together.

Template literals are preferred:
`${firstName} ${lastName}`
*/

// ===  17. repeat() ============

console.log("JS ".repeat(3));

/*
Repeats string specified number of times.

Output:
JS JS JS
*/

// === MOST IMPORTANT METHODS =========

/*
1. length
2. trim()
3. includes()
4. indexOf()
5. slice()
6. substring()
7. split()
8. replace()
9. toUpperCase()
10. toLowerCase()
*/
