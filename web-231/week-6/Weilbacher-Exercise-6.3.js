/*
============================================
; Title:  Weilbacher-Exercise-6.3.js
; Author: Andrew Weilbacher
; Date:   07 July 2019
; Description: Displays a formatted header and example object literal
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 6.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// start program

var ticket = {
  id : 101,
  name: "Help Desk Support",
  requestor: "Bob Jones",
};

console.log(ticket);

// end program
