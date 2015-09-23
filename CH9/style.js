/*
          Quoting Style
                    
    Excercise #2 for EJS in CH9
    http://eloquentjavascript.net/09_regexp.html#h_dTiEW14oG0
    
    Goal: replace all instances of single quotes with double quotes
    	  while keeping single quotes usde in contractions (i.e. aren't)
*/


var text = "'I'm the cook,' he said, 'it's my job.'";

regexp = /(\W)'|'(\W)|'([A-Z])/g;

console.log(text.replace(regexp, '$1"$3'));
// → "I'm the cook," he said, "it's my job."



