/*
                    Sequence Interface
                    
    Excercise #3 for EJS in CH6
    http://eloquentjavascript.net/06_object.html#h_a0w19Kx5iq
    
*/


function ArraySeq(ar) {
    this.ar = ar;
    this.count = ar.length;
}

ArraySeq.prototype.val = function(counter) {
    return this.ar[counter];
};


function RangeSeq(rangeStart, rangeEnd) {
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
    this.count = rangeEnd - rangeStart;
}

RangeSeq.prototype.val = function(counter) {
    var val = this.rangeStart + counter;
    return (val <= this.rangeEnd) ? val : NaN;
};

function logFive(sequence) {
    var iter = (sequence.count <= 5) ? sequence.count : 5;
    
    for(var i = 0; i < iter; i++) {
        console.log(sequence.val(i));      
    }    
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

