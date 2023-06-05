/**
 * Temporal complex (TC)  -> O(n + 1*3) = O(n)
 * Spatial complex (SC)   -> O(n + 1)   = O(n)
 * Auxiliar space (AS)    -> O(1)       = O(1)
 */
                                        // Temporal   // Spatial
function linearSearch(array, key) {                   // O(n) because param 'array'
  for(let i=0; i<array.length; i++) {   // O(n)       // O(1) because let 'i'
    if(array[i] == key) {               // O(1)
      return i;                         // O(1)
    }
  }
  return -1;                            // O(1)
}