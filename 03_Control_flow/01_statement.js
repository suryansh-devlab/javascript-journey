// ====================================
// Conditional Statements
// ====================================

// if Statement
// Executes code only when condition is true.

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Hi, Suryansh ❤️");
}

// ====================================
// if...else
// ====================================

// Executes one block if condition is true,
// otherwise executes the else block.

const temperature = 44;

if (temperature < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than or equal to 50");
}

// ====================================
// Strict Comparison
// ====================================

// === compares both value and datatype.

if (2 === 2) {
  console.log("Executed");
}

// ====================================
// Block Scope
// ====================================

const score = 200;

if (score > 100) {
  const power = "Fly";
  console.log(`User Power: ${power}`);
}

// console.log(power);
// Error: power is block scoped.

// ====================================
// Implicit Block (Single Line if)
// ====================================

// Use only for simple statements.

const balance = 1000;

if (balance > 500) console.log("Balance is sufficient");

// ====================================
// if...else if...else
// ====================================

// Used when multiple conditions need checking.

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Greater than or equal to 900");
}

// ====================================
// Logical AND (&&)
// ====================================

// All conditions must be true.

const userLogged = true;
const debitCard = true;

if (userLogged && debitCard) {
  console.log("Purchase Allowed");
} else {
  console.log("Purchase Denied");
}

// ====================================
// Logical OR (||)
// ====================================

// At least one condition must be true.

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("Welcome 🚀");
} else {
  console.log("Login Required");
}

// ====================================
// switch Statement
// ====================================

// Used when comparing one value
// against multiple possible cases.

const month = 2;

switch (month) {
  case 0:
    console.log("January");
    break;

  case 1:
    console.log("February");
    break;

  case 2:
  case "march": // Multiple cases can share the same block.
    console.log("March");
    break;

  case 3:
    console.log("April");
    break;

  case 4:
    console.log("May");
    break;

  case 5:
    console.log("June");
    break;

  case 6:
    console.log("July");
    break;

  case 7:
    console.log("August");
    break;

  case 8:
    console.log("September");
    break;

  case 9:
    console.log("October");
    break;

  case 10:
    console.log("November");
    break;

  default:
    console.log("December");
    break;
}

/*
====================================

Quick Revision

if
-> Executes when condition is true

if...else
-> Chooses between two blocks

else if
-> Checks multiple conditions

===
-> Strict comparison
-> Checks value and datatype

&&
-> All conditions must be true

||
-> At least one condition must be true

switch
-> Better alternative to multiple else-if
-> Always use break to prevent fall-through

default
-> Executes when no case matches

====================================
*/
