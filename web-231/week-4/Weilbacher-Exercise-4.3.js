/*
============================================
; Title:  Weilbacher-Exercise-4.3.js
; Author: Andrew Weilbacher
; Date:   22 June 2019
; Description: Displays a formatted header and example array for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 4.3"));

// start program

/*
Expected output:
FirstName LastName
Exercise 4.3
Today's Date

-- DISPLAYING ARRAY ITEMS --
Car
Truck
Motorcycle
Airplane
Bus

-- SELECTED VALUE --
Motorcycle

-- SELECTED VALUE --
Bus

*/

// start program
// create variable with array and items
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
// create function of getValue to pass array items and value to be matched
function getValue(arr, val) {
  // for loop iteration over array
  for (var k = 0; k < arr.length; k++) {
    // check if value matches item in array
    if (arr[k] === val)
      // log matched item
      console.log(arr[k]);
  }
}

// Output
// space in output
console.log("");
// message in output
console.log("-- DISPLAYING ARRAY ITEMS --");
// create for loop to iterate over array and log all vehicles
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

// new line
// space in output
console.log("");
// message in output
console.log("-- SELECTED VALUE --");
// run getValue function for vehicles and match Motorcycle
getValue(vehicles, "Motorcycle");

// new line
// space in output
console.log("");
// message in output
console.log("-- SELECTED VALUE --");
// run getValue function for vehicles and match Motorcycle
getValue(vehicles, "Bus");

// end program
