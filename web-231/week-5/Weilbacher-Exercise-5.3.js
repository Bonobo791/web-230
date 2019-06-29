/*
============================================
; Title:  Weilbacher-Exercise-5.3.js
; Author: Andrew Weilbacher
; Date:   29 June 2019
; Description: Displays a formatted header and example key-value pairs
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 5.3"));

/*
Expected output:

FirstName LastName
Exercise 5.3
Today's Date

-- COMPOSERS --
Last Name: Beethoven, Genre: Classical, Rating: 8
Last Name: Mozart, Genre: Classical, Rating: 10
Last Name: Bach, Genre: Classical, Rating: 9
Last Name: Haydn, Genre: Classical, Rating: 6
Last Name: Schubert, Genre: Classical, Rating: 5

*/

// start program

// create variable for key-value pairs
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];

// console logs for formatting output
console.log("");
console.log("-- COMPOSERS --")

// forEach method to iterate over key-value pairs
composers.forEach(function(composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
})

// end program
