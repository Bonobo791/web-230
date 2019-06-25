/*
============================================
; Title:  Weilbacher-Exercise-5.2.js
; Author: Andrew Weilbacher
; Date:   25 June 2019
; Description: Displays a formatted header and example array for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 5.2"));

/*
Expected output:

FirstName LastName
Exercise 5.2
Today's Date

Oysters
Shrimp
Steak
Tacos
Sushi

*/

// start program

// create space for formatting output
console.log("");

// create array of food
var food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];
// create forEach loop to iterate over array
food.forEach(function(food) {
  console.log(food);
});

// end program
