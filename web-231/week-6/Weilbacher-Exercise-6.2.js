/*
============================================
; Title:  Weilbacher-Exercise-6.2.js
; Author: Andrew Weilbacher
; Date:   25 June 2019
; Description: Displays a formatted header and example exception handling
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 6.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

// start program

// create example variable
var x = 10;

// create try to test error
try {

  x = y + 1;

  // if x doesn't equal 10, then throw error
if (x !== 10) throw "Missing Variable";
  console.log(x);
  // log error found
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  // submit message for end of error
  console.log("Finally clause: End of program ...");
}

// end program
