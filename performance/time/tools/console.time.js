function count(n) {
  for(let i=0; i<n; i++) {
    console.log(i+1);
  }
}

let init = console.time('El algoritmos ha durado');
count(10);
let finish = console.timeEnd('El algoritmos ha durado');