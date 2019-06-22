/*
============================================
; Title:  Weilbacher-Exercise-4.2.js
; Author: Andrew Weilbacher
; Date:   22 June 2019
; Description: Displays a formatted header and example array for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 4.2"));

// start program

/*
Expected output:
FirstName LastName
Exercise 4.2
Today's Date

Apple
Orange
Banana
Mango
Pear
*/

// start program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++) {
    console.log(arr[k]);
  }
}

// Output from the getFruit() function
getFruit(fruits);

// end program
