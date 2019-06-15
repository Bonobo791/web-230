/*
============================================
; Title:  Weilbacher-Exercise-3.2.js
; Author: Andrew Weilbacher
; Date:   15 June 2019
; Description: Displays a formatted header and example function for assignment
;===========================================
*/

// header
  const header = require('./Weilbacher-header.js');

  console.log(header.display("Andrew", "Weilbacher", "Exercise 3.2"));

// start program

/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// variables
  var testVar1 = "Truck";
  var testVar2 = "Car";
  var testVar3 = "Bike";
  var testVar4 = "Bike";
  var testVar5 = "Four";
  var testVar6 = "Three";

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

// Output from the match() function
  // logs message for required output
  console.log("// output from the match() function");
  // Test strings in match function for true or false values
  console.log(match("A","B"));
  console.log(match(2,2));

// Conditions if...else statements. Include checks for all six (6) test
  // logs message for required output
  console.log("// output from the if...else blocks");
  // test testVar1 and testVar2
    // enter testVar1 and testVar2 into match function to evaluate
    if (match(testVar1, testVar2)) {
        // test variables if match
        logMatch(testVar1, testVar2);
      } else {
        // else test variables if mismatch
        logMismatch(testVar1, testVar2);
      }

  // test testVar3 and testVar4
    // enter testVar3 and testVar4 into match function to evaluate
    if (match(testVar3, testVar4)) {
      // test variables if match
      logMatch(testVar3, testVar4);
    } else {
      // else test variables if mismatch
      logMismatch(testVar3, testVar4);
    }

  // test testVar5 and testVar6
    // enter testVar5 and testVar6 into match function to evaluate
    if (match(testVar5, testVar6)) {
      // test variables if match
      logMatch(testVar5, testVar5);
    } else {
      // else test variables if mismatch
      logMismatch(testVar5, testVar6);
    }

// end program
