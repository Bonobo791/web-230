/*
============================================
; Title:  Weilbacher-Exercise-7.2.js
; Author: Andrew Weilbacher
; Date:   13 July 2019
; Description: Displays a formatted header and example constructor object
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 7.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// start program

// create constructor function
function Employee(id,firstName,lastName,title) {

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

}

// create array variable with constructor function values
var Employees = [

  new Employee("1", "Thomas", "Edison", "Software Engineer"),
  new Employee("2", "Benjamin", "Franklin", "Programmer"),
  new Employee("3", "Nikola", "Tesla", "Project Manager"),
  new Employee("4", "Charles", "Babbage", "Product Manager"),
  new Employee("5", "Alexander", "Bell", "Business Analyst")

];

// interate through array variable
for (var x = 0; x < Employees.length; x++) {
  console.log(Employees[x].id + " " + Employees[x].firstName + " " + Employees[x].lastName + " " + Employees[x].title);
}

// end program
