6/*
============================================
; Title:  Weilbacher-Discussion-5.1.js
; Author: David Flanagan
; Contributor: Andrew Weilbacher
; Contributor:
; Date: 04 July 2019
; Description: Displays a formatted header and output of example JS objects for correction.
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Discussion 6.1"));

/*
    Expected output:

    Andrew Weilbacher
    Discussion 6.1
    Today's Date
    Object {x: 0, y: 0}
    Object {main title: "Javascript", sub-title: "The Definitive Guide", for: "all audiences", author: Object}
    Object {x: 0, y: 1}

*/

// start program

var point = { x:0, y:0 ;
console.lo(point);
var point2 = { x:point.x, y:point.y+1 };
console.log(point2);
var book = {
 "main title": "JavaScript"
 'sub-title': "The Definitive Guide"
 "for": "all audiences",
 author: {
 firstname: "David",
 surname: "Flanagan"
 }
};
console.log(book);

// example of object with two accessible properties
function Sandwich(meat, cheese, bread) {
  this.meat = ham;
  this.cheese = manchego;
  this.bread = rye;
}

// end program
