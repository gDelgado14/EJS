/*
                    Another Cell
                    
    Excercise #2 for EJS in CH6
    http://eloquentjavascript.net/06_object.html#h_nLNNevzcF7
    
    note: this code depends on cleanTable.js in ~/CH6.
    
    run code in exercise's sandbox
*/
function StretchCell(inner, width, height) {
    this.TextCell = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function() {
    return Math.max(this.TextCell.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.TextCell.minHeight(), this.height);
};
StretchCell.prototype.draw = function(width, height) {
    return this.TextCell.draw(width, height);
};

// The following output will only work in Exercise 2 sandbox
// http://eloquentjavascript.net/06_object.html#h_nLNNevzcF7
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]