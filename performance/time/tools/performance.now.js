function count(n) {
  for(let i=0; i<n; i++) {
    console.log(i+1);
  }
}

let init = performance.now();
count(10);
let finish = performance.now();
let duration = finish - init;
console.log(`El algoritmos ha durado ${duration}ms`);