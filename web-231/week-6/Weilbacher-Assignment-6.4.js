/*
============================================
; Title:  Weilbacher-Assignment-6.4.js
; Author: Andrew Weilbacher
; Date:   08 July 2019
; Description: Displays a formatted header and example nested object literals
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Assignment 6.4"));

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

// create ticket variable
var ticket = {
  // create values
  id: 1,
  name: "Ticket1",
  dateCreated: "07/08/2019",
  priority: 1,
  personID: 1,

  // create nested object
  person: {
    // create values
    id: 1,
    firstName: "Jon",
    lastName: "Doe",
    jobTitle: "Manager",
  }
};

// log program output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + ", " + ticket.person.jobTitle + ".");

// end program
