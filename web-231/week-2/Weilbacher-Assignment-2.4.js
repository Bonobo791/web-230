
/*
============================================
; Title:  Weilbacher-Assignment-2.4.js
; Author: Andrew Weilbacher
; Date:   08 June 2019
; Description: Displays a formatted header and example functions for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Assignment 2.4"));

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>

    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/


// example functions
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
};

function dateWriter(year, month, day) {
  return new Date(year, month, day).toLocaleDateString();
};

function formatNumber(number, fixedPosition) {
  return number.toFixed(fixedPosition);
};

function convertToInt(string) {
  return parseInt(string);
};

function convertToFloat(string) {
  return parseFloat(string);
};

// display name
console.log("Hello my name is " + fullName("Andrew", "Weilbacher") + "!");

// display date and temp
console.log("Today's date is " + dateWriter(2019, 05, 08) + " and the current temperature is " + formatNumber(80,1) + "F");

// display age and savings goal
console.log("I am " + convertToInt("27") + " years old and my savings account goal is " + "$" + convertToFloat("110000") + " dollars.");
