
/*
============================================
; Title:  Weilbacher-Exercise-2.3.js
; Author: Andrew Weilbacher
; Date:   08 June 2019
; Description: Displays a formatted header
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 2.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 2.3
  Today's Date
  Hello FirstName LastName!
  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// function properties
myName.Andrew = "Andrew";

// function
function myName() {

  return myName.Andrew;

};

// output
console.log("Hello " + myName() + " Weilbacher!");
