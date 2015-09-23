/*
        Numbers again
                    
    Excercise #3 for EJS in CH9
    http://eloquentjavascript.net/09_regexp.html#h_izldJoT3uv
    
    Goal: Write an expression that matches only JavaScript-style numbers
    	- supports an optional minus or plus sign in front of the number 
    	- supports the decimal dot
    	- supports exponentation   	
*/

// expression
var number = /^([+-\.]?\d+|\.\d+|\d+\.)(\d?(e[\+-]?\d+)|\d+)?$/i;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});