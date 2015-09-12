
/*
                    A Vector Type
                    
    Excercise #1 for EJS in CH6
    http://eloquentjavascript.net/06_object.html#h_zO8FRQBMAy
*/


function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(V) {
    return new Vector(this.x + V.x, this.y + V.y);
};
Vector.prototype.minus = function(V) {
    return new Vector(this.x - V.x, this.y - V.y);
};

// compute distance of vector object from origin (0,0)
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.hypot(this.x, this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5