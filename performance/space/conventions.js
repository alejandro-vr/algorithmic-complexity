let a = 1;                      // O(1)    => Assignation
if(a == 1) {}                   // O(1)    => Block if()
for(let i=0; i<a; i++) {}       // O(1)    => Block for(), while() and others
let array = [ 1, 2, 3 ];        // O(n)    => One dimension collection
let matrix = [ [1,2], [3,4] ];  // O(n^2)    => Two dimensions collection