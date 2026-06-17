// ==== Variables in JavaScript ======

// const -> value cannot be reassigned after initialization
const accountId = 325100206299;

// let -> preferred way to declare variables that may change
let accountEmail = "suryanshkushwaha.devlab@gmail.com";

// var -> old way of declaring variables (avoid in modern JS)
var accountPassword = "8090100853";

// Never declare variables without let/const/var
// It creates a global variable and can cause bugs
 accountCity = "Lucknow";

// ===== Modifying Values ===================

// accountId = 9630; // ❌ TypeError: Assignment to constant variable

accountEmail = "suryansh@gmail.com"; // ✅ let can be reassigned
accountPassword = "213456"; // ✅ var can be reassigned
accountCity = "Mumbai"; // ✅ let can be reassigned



console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*==========Quick Notes=================

1. const
   - Must be initialized at declaration.
   - Cannot be reassigned.
   - Use by default whenever possible.

2. let
   - Can be reassigned.
   - Block-scoped.
   - Preferred for changing values.

3. var
   - Function-scoped.
   - Can be redeclared and reassigned.
   - Hoisted differently than let/const.
   - Avoid using in modern JavaScript.

4. Scope
   {
      let a = 10;
      const b = 20;
      var c = 30;
   }

   console.log(c); // ✅ 30
   console.log(a); // ❌ ReferenceError
   console.log(b); // ❌ ReferenceError

5. Best Practice
   - Use const by default.
   - Use let when value needs to change.
   - Avoid var.

Interview Rule:
"Use const first, let when needed, never var."
*/
