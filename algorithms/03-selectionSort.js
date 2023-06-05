/**
 * Temporal complex (TC)  -> O(n*n + 1*8) = O(n^2)
 * Spatial complex (SC)   -> O(n + 1*5)   = O(n)
 * Auxiliar space (AS)    -> O(5)         = O(1)
 */
                                    // Temporal // Spatial
function selectionSort(array) {                 // O(n)
  let length = array.length;        // O(1)     // O(1)
  for(let i=0; i<length; i++) {     // O(n)     // O(1)
    let min = i;                    // O(1)     // O(1)
    for(let j=0; j<length; j++) {   // O(n)     // O(1)
      if(array[j] < array[min]) {   // O(1)
        min = j;                    // O(1)
      }
    }
    if(min != i) {                  // O(1)
      let temporal = array[i];      // O(1)     // O(1)
      array[i] = array[min];        // O(1)
      array[min] = temporal;        // O(1)
    }
  }
  return array;
}

let key = 4;
let array = [ 0, 1, 2, 3, 4 ];
console.log(linearSearch(array, key));