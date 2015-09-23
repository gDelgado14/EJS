/*
          RegExp Golf
                    
    Excercise #1 for EJS in CH9
    http://eloquentjavascript.net/09_regexp.html#h_vDM8PzwQWU
    
*/

// function for verifying whether a RegEx works or not
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
    else
      console.log("matched '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

//car and cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

//pop and prop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);
       
//ferret, ferry, and ferrari
verify(/ferr[aey][tr]?i?/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

//Any word ending in 'ious'
verify(/\b\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

//A whitespace character followed by a dot, comma, colon, or semicolon 
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

//A word longer than six letters 
verify(/^\w{6,}$/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

//A word without the letter e
verify(/\b[a-df-z]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

