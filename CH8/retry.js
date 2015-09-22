/*
            Retry
                    
    Excercise #1 for EJS in CH8
    http://eloquentjavascript.net/08_error.html#h_n1zYouiAfX
    
*/

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;) {
  	try {
    	var ans = primitiveMultiply(a,b);
      	return ans;
    } catch(e) {
    	console.log(e);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64