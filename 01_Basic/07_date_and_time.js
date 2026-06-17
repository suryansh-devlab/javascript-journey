// =====DATES IN JAVASCRIPT=======

// Current Date & Time

let myDate = new Date();

console.log(myDate);

/* Date object stores date and time information.*/

// ======Date Formats=========

console.log(myDate.toString());

/* Wed Jun 17 2026 12:32:27 GMT+0530 */

console.log(myDate.toDateString());

/* Wed Jun 17 2026 */

console.log(myDate.toISOString());

/* 2026-06-17T07:02:27.123Z
ISO Format
Commonly used in APIs
*/

console.log(myDate.toJSON());

/* Same as ISO string Used while sending JSON*/

console.log(myDate.toLocaleDateString());

/* 17/6/2026 */

console.log(myDate.toLocaleString());

/* 17/6/2026, 12:32:27 pm */

console.log(myDate.toTimeString());

/* 12:32:27 GMT+0530 */

console.log(myDate.toUTCString());

/* Wed, 17 Jun 2026 07:02:27 GMT */

// =====Creating Custom Dates =======

// Month starts from 0

let date1 = new Date(2023, 0, 23);

console.log(date1.toDateString());

/* 23 Jan 2023*/

// With Time

let date2 = new Date(2023, 0, 23, 5, 3);

console.log(date2.toLocaleString());

/* 23/1/2023, 5:03:00 am */

// YYYY-MM-DD

let date3 = new Date("2023-01-14");

console.log(date3.toLocaleDateString());

// MM-DD-YYYY

let date4 = new Date("01-14-2023");

console.log(date4.toLocaleDateString());

// ===Timestamps========

let myTimeStamp = Date.now();

console.log(myTimeStamp);

/*Milliseconds since 1 Jan 1970*/

console.log(Math.floor(Date.now() / 1000));

/* Convert milliseconds to seconds */

// ===Compare Dates=============

console.log(date4.getTime());

/*Returns timestamp in milliseconds.
Useful for:
- Sorting dates
- Comparing dates
- Calculating time differences
*/

// =======Date Getters===========

let newDate = new Date();

console.log(newDate.getFullYear());

/*2026*/

console.log(newDate.getMonth() + 1);

/*Month starts from 0
January = 0
December = 11
Add +1 for human-readable month.
*/

console.log(newDate.getDate());

/*Day of month 1 - 31 */

console.log(newDate.getDay());

/* Day of week
0 = Sunday
1 = Monday
2 = Tuesday
...
6 = Saturday
*/

console.log(newDate.getHours());

console.log(newDate.getMinutes());

console.log(newDate.getSeconds());

// ===Custom Formatting=======

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  }),
);

/*Wednesday*/

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

/*Wednesday, June 17, 2026*/

// ===INTERVIEW NOTES======

/*

new Date()
=> Current date and time

Date.now()
=> Current timestamp in milliseconds

getTime()
=> Timestamp of a date

getMonth()
=> 0-11

getDay()
=> 0-6

getDate()
=> Day of month

getFullYear()
=> Current year

====================================

Month Index

0 => January
1 => February
2 => March
...
11 => December

====================================

Day Index

0 => Sunday
1 => Monday
2 => Tuesday
3 => Wednesday
4 => Thursday
5 => Friday
6 => Saturday


*/
