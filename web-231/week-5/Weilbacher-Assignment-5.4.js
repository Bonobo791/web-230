/*
============================================
; Title:  Weilbacher-Assignment-5.4.js
; Author: Andrew Weilbacher
; Date:   29 June 2019
; Description: Displays a formatted header and example key-value pairs with map() method
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Assignment 5.4"));

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

// create variable for key-value pairs
var famousComposers = [
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

// formatting output
console.log('\n');
// create variable for map() method
var composersByRating = famousComposers.map(function(composer) {
  // return filtered list
  return "Rating: " + composer.rating + '\n' +
  "Composer: " + composer.lastName + '\n'
});

// create variable for map() method
var composersByGenre = famousComposers.map(function(composer) {
  // return filtered list
  return "Genre: " + composer.genre + '\n' +
  "Composer: " + composer.lastName + '\n'
});

// formatting output
console.log("-- COMPOSER BY RATING --");
// create variable for forEach() method to iterate over former map() method's new list
var composersByRatingFE = composersByRating.forEach(function(composer) {
  console.log(
    composer
  );
});

// formatting output
console.log("-- COMPOSER BY GENRE --");
// create variable for forEach() method to iterate over former map() method's new list
var composersByGenreFE = composersByGenre.forEach(function(composer) {
  console.log(
    composer
  );
});

// end program
