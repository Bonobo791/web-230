/*
============================================
; Title:  Weilbacher-Exercise-3.3.js
; Author: Andrew Weilbacher
; Date:   15 June 2019
; Description: Displays a formatted header and example function for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 3.3"));

// start program

/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

// establish event code
let eventKeyCode = 13;

// create switch statement
switch (eventKeyCode) {
  // if event code is 13, return enter key message
    case 13:
      console.log('The enter key was pressed.');
      break;
  // if event code is 16, return shift key message
    case 16:
      console.log('The shift key was pressed.');
      break;
  // if event code is 32, return spacebar key message
    case 32:
      console.log('The spacebar key was pressed.');
      break;
  // if event code is 8, return backspace / delete key message
    case 8:
      console.log('The backspace / delete key was pressed.');
      break;
  // if unrecognized event code is entered, return unrecognized message - default message
    default:
      console.log('Unrecognized key.');
      break;
}

// end program
