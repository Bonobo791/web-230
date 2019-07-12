/*
============================================
; Title:  Weilbacher-Discussion-7.1.js
; Author: Andrew Weilbacher
; Contributor:
; Date: 11 July 2019
; Description: Displays a formatted header and output of example JS document write.
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Discussion 7.1"));

// start program

<script>
  document.write(<h1>Hello World!</h1>)
</script>

<h1 id="bar"></h1>
<script>
  document.getElementById('bar').innerHTML = "Behold, My To-Do List!";
</script>
<div id="todo"></div>
<script>
  document.getElementById('todo').innerHTML "<h1>TODO LIST</h1>" +
  "<table>" +
    "<thread>" +
      "<tr>" +
        <th>List Item(s)</th> +
      "</tr>" +
    "</thread>" +
      "<tbody>" +
        "<tr><td>Do Homework for Javascript Class</td></tr>" +
        "<tr><td>Do Math Work</td></tr> +
        "<tr><td>Study Spanish</td></tr>" +
        "<tr><td>Suffer Through More Episodes of Game of Thrones</td></tr>" +
      "</tbody>" +
  "</table>"
</script>

// end program
