/**
 * Temporal complex (TC)  -> O(n*n + 1*6) = O(n^2)
 * Spatial complex (SC)   -> O(n + 1*4)   = O(n)
 * Auxiliar space (AS)    -> O(4)         = O(1)
 */
                                    // Temporal // Spatial
function bubbleSort(array) {                    // O(n)
  let length = array.length;        // O(1)     // O(1)
  for(let i=0; i<length; i++) {     // O(n)     // O(1)
    for(let j=0; j<length; j++) {   // O(n)     // O(1)
      if(array[j] > array[j+1]) {   // O(1)
        let temporal = array[j];    // O(1)     // O(1)
        array[j] = array[j+a];      // O(1)
        array[j+1] = temporal;      // O(1)
      }
    }
  }
  return array;                     // O(1)
}
