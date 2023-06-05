let a = 1;                  // O(1)    => Assignation
if(a == 1) {}               // O(1)    => Block if()
for(let i=0; i<a; i++) {}   // O(n)    => Block for()
while(a == 0) {}            // O(n)    => Block while()
for(let i=0; i<a; i++) {    // O(n^2)  => Block for() nested in for()
  for(let j=0; j<a; j++) {}
}