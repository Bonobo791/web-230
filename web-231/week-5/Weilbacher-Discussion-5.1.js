/*
============================================
; Title:  Weilbacher-Discussion-5.1.js
; Author: Andrew Weilbacher
; Date:   28 June 2019
; Description: Displays a formatted header and output of example keyvalue pairs.
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Discussion 5.1"));

/*
    Expected output:

    Andrew Weilbacher
    Discussion 5.1
    Today's Date
    I had eggs for breakfast.
    I had tacos for lunch.
    I had nachos for dinner.

*/

// start program
// set variable with mapping
var foods = new Map();
// set keyvalue pairs
foods.set('breakfast', 'eggs');
foods.set('lunch', 'tacos');
foods.set('dinner', 'nachos');

// create for loop to iterate over keyvalue pairs
for (var [key, value] of foods) {
  // log results
  console.log("I had " + value + " for " + key + ".");
}

// end program
