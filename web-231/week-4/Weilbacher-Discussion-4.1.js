/*
============================================
; Title:  Weilbacher-Discussion-4.1.js
; Author: Andrew Weilbacher
; Date:   20 June 2019
; Contributor:
; Description: Displays a formatted header and output of example array methods.
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Discussion 4.1"));

// start program

/*
    Expected output:

    Andrew Weilbacher
    Discussion 4.1
    Date: 6/20/2019
    Mango
    5

*/
// create fruits array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// show last item
var x = fruits.pop();      // the value of x is "Mango"
console.log(x);
// add new item
var y = fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
console.log(y);
