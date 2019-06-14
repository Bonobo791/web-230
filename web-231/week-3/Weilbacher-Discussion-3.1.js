/*
============================================
; Title:  Weilbacher-Discussion-3.1.js
; Author: Andrew Weilbacher
; Date:   13 June 2019
; Contributor:
; Description: Displays a formatted header and example functions for assignment; for loop code has two errors to be fixed.
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Discussion 3.1"));

// start program

/*
    Expected output:

    Andrew Weilbacher
    Discussion 3.1
    Date: 6/13/2019
    The number is 0
    The number is 1
    The number is 2
    The number is 3
    The number is 4

*/

var i;
var text;

for (i = 0; i < 5; i+) {
  console.log(text + "The number is " + i);
}
