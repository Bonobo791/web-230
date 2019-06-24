/*
============================================
; Title:  Weilbacher-Assignment-4.4.js
; Author: Andrew Weilbacher
; Date:   22 June 2019
; Description: Displays a formatted header and example predicate for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Assignment 4.4"));

// start program

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
// create variable with states array
var States = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// Output

// All array items
  // space in output
  console.log("");
  // message in output
  console.log("-- ORIGINAL ARRAY --");
  // create for loop to iterate over array and log all States
  for (var x = 0; x < States.length; x++) {
    console.log(States[x]);
  }

// Sorted array items
  // space in output
  console.log("");
  // message in output
  console.log("-- SORTED ARRAY --");
  // create for loop to iterate over array and log all States
  for (x = 0; x < States.length; x++) {
    States.sort();
    console.log(States[x]);
  }

// Selected value
  // new line
    // space in output
    console.log("");
    // message in output
    console.log("-- SELECTED VALUE --");
    // create predicate
    function get_value(x,val) {
      return x === val
    }
    // create filter
    var filteredStates = States.filter(function(x) {return get_value(x, "Iowa")});
    // log filter results
    console.log(filteredStates[0]);

// end program


