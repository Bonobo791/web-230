/*
============================================
; Title:  rattanavilay-discussion-3.1.js
; Author: Thip Rattanavilay
; Date:   12 June 2019
; Modified By: Andrew Weilbacher
; Description: simple program using a for, while, if or switch statement with errors
;===========================================
*/

// Imported the header file for this exercise 3.1 - Week 3
const header = require('../rattanavilay-header.js');

// Output
console.log(header.display('Thip', 'Rattanavilay', 'Discussion 3.1 - Week 3'));
// ***console.log is causing breaks in output
// console.log("\n");

// End Program

// ***removed \n from end of code to get rid of break
console.log("NBA Finals 2019! The team with the highest basketball hoops Wins!");

// ***both variables were lower case
Warriors=Math.floor(Math.floor(100));
Raptors=Math.floor(Math.floor(103));

console.log("Golden State Warriors: " + Warriors);
console.log("Toronto Raptors: " + Raptors);
// ***console.log is causing breaks in output
// console.log("\n");

// ***variable name Warriors was lower case
if(Warriors > Raptors) {
    console.log("Golden State Warriors Wins!");
}
// ***variable name Raptors was lower case
else if(Raptors > Warriors) {
console.log("Toronto Raptors Wins!");
}
else {
    console.log("There is a tie!");
}

// ***console.log is causing breaks in output
// console.log("\n");

var warriors = 100;

while(warriors < 0) {
  n++;
}

console.log("With only "  + warriors + " points on the board, the Warriors are is the losers!");

// Start Program

/*
  Expected output:
Thip Rattanavilay
Discussion 3.1 - Week 3
Date: 6/12/2019
NBA Finals 2019! The team with the highest basketball hoops Wins!
Golden State Warriors: 100
Toronto Raptors: 103
Toronto Raptors Wins!
With only 100 points on the board, the Warriors are is the losers!
*/
