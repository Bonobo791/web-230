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

// functions

  // Match Value Function
  function get_value(arr, val) {
    // for loop iteration over array
    for (var k = 0; k < arr.length; k++) {
      // check if value matches item in array
      if (arr[k] === val) {
        // return val if matched
        return val;
      }
    }

    // run filter over arr if true
    var get_value_filtered = arr.filter(get_value);
    // console log filtered value
    console.log(get_value_filtered);
  }


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
    // run getValue function for vehicles and match Iowa
    console.log(get_value(States, "Iowa"));

// end program
