/*
    Build a table
                    
    Excercise #2 for EJS in CH13
    http://eloquentjavascript.net/13_dom.html#h_VSftnyRTsV
    
    - returns an array containing all descendant element nodes with the given tag name 
    - output visible in 'elements.html'
*/


function byTagName(node, tagName) {
	// Should probably have used recursion
	var childs = [];
	var firstGen, secondGen;
	
	Object.keys(node.childNodes).forEach(function(key) {
		firstGen = node.childNodes[key];
		
		//console.log("element node: " + document.ELEMENT_NODE);
		if (firstGen.tagName == tagName.toUpperCase())
			childs.push(node.childNodes[key]);
			
		Object.keys(firstGen.childNodes).forEach(function(key) {
			secondGen = firstGen.childNodes[key];
			if (secondGen.tagName == tagName.toUpperCase())
				childs.push(node.childNodes[key]);
		});
	});
	
	return childs;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2