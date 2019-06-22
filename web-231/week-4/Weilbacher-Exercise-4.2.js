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
// create variable for array with fruit items
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
// create function of getFruit for iterating over array
function getFruit(arr) {
  // create for loop to iterate over the array
  for (var k = 0; k < arr.length; k++) {
    // log each fruit with every iteration
    console.log(arr[k]);
  }
}

// Output from the getFruit() function
// create space in output
console.log("");
// call getFruit function over fruits array
getFruit(fruits);

// end program
