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

    Mango
    5

*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"
console.log(x);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var y = fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
console.log(y);
