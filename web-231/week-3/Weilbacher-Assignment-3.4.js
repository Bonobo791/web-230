/*
============================================
; Title:  Weilbacher-Assignment-3.4.js
; Author: Andrew Weilbacher
; Date:   15 June 2019
; Description: Displays a formatted header and example function for assignment
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Assignment 3.4"));

// start program

/*
  FirstName LastName
  Assignment 3.4
  Today's Date
  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

// log message to match required output
console.log("-- DO THE NUMBERS MATCH GAME --");


// functions

  // function match
  function match(arg1, arg2) {
    // compare arguments for equality
    if (arg1 === arg2)
    // output evaluation of arguments
      return true
    else
      return false
  }

  // function logMismatch
  function logMismatch(arg1, arg2) {
    // log argument variables into a string if match
    console.log(arg1 + " and " + arg2 + " do not match!");
  }

  // function logMatch
  function logMatch(arg1, arg2) {
    // log argument variables into a string if match
    console.log(arg1 + " and " + arg2 + " do match!");
  }

  // function randomNumber
  function randomNumber() {
    // return random number and calculate
    return Math.floor((Math.random() * 10) + 1)
  }

// Global Variables

  //create global variable for matching against local variable in loop
  var variable = 6;
  // create global variable as argument for loop
  var i = 1;

// Loops

  // create for loop to set random variable and evaluate
  for(i; i < 11; i++) {
    // set local variable to use in randomNumber function
    var localVar = 1;
    // create randomNumber function that calculates random number from localVar
    function randomNumber() {
      // return random number and calculate
      return Math.floor((Math.random() * 10) + 1)
    }
    // set output of randomNumber to localVar
    var localVar = randomNumber();

  // evaluate if variable matches random number in localVar
    // enter variable and localVar into match function to evaluate
    if (match(variable, localVar)) {
      // test variables if match
      logMatch(variable, localVar);
    } else {
      // else test variables if mismatch
      logMismatch(variable, localVar);
    }
  }

// end program
