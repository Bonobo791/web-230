/*
============================================
; Title:  Discussion 6.1
; Author: Loren Wetzel
; Contributor: Andrew Weilbacher
; Date:   2 July 2019
; Modified By:
; Description: create a simple JavaScript
;  program using a object properties
;  with at least two (2) errors.
;===========================================
*/
'use strict';

//header
//const header = require('../wetzel-header.js');
//console.log(header.display("Loren", "Wetzel", "Discussion 6.1"));

/*
  Expected output:
  FirstName LastName
  Discussion 6.1
  Today's Date
  Hey everyone, I'm Loren Wetzel.
  I have 3 kids. Starting with my oldest they are
  Romeo Wetzel who is 17
  Ashton Vodicka who is 4
  Aurora Tyson who is 1
*/

//start program

//create object that has getters and setters
var fam = {
  fName: "Loren",
  lName: "Wetzel",
  age: 37,

  get name() {
    // *** Needed to add fam.
    return fam.fName + " " + fam.lName;
  },

  set name(val) {
    this.fullName = val;
  }
}
//output
console.log("Hey everyone, I'm " + fam.name + ".\n")

//array to use with object
var kid = [["Romeo", "Wetzel", 17],
["Ashton", "Vodicka", 4], ["Aurora", "Tyson", 1]];

//output
console.log("I have 3 kids. Starting with my oldest they are")

//iterate over array while using fam object to output
var index = 0;
kid.forEach(function (k) {
  // *** changed variable to arrays of kids' info
  // *** changed index to actual index within arrays
  kid.fName = k[0],
    kid.lName = k[1],
    kid.age = k[2],
    // *** changed variable to kid and added lName
    console.log(kid.fName + " " + kid.lName + " who is " + kid.age);
    index++;
});

//end program
