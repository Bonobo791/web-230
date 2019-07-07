//const header = require('../Vanroekel-header.js')

//console.log(header.display("Faye", "Van Roekel", "Assignment 5.1"));

/*
============================================
; Title:  Assignment 6.1 Objects and Built In Objects
; Author: Faye Van Roekel
; Contributor: Andrew Weilbacher
; Date:   03 July 2019
; Description: Objects and Built In Objects
;===========================================
*/
/*
; Expected Output:
; Faye Van Roekel has blue eyes.
; Odie Van Roekel has green eyes.
*/

// start program
// *** changed ( to {
var person = {
    firstName: "Faye",
    // *** removed space between lastName and :
    lastName: "Van Roekel",
    eyeColor: "blue",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

var person2 = {
  // *** added , at end
    firstName: "Odie",
    // *** removed space between lastName and : - added , at end
    lastName: "Van Roekel",
    // *** removed space between eyeColor and : - added , at end
    eyeColor: "green",

    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log (person.firstName + " " + person.lastName + " has " + person.eyeColor + " eyes.")
// *** changed to person2
console.log (person2.firstName + " " + person2.lastName + " has " + person2.eyeColor + " eyes.")

//end
