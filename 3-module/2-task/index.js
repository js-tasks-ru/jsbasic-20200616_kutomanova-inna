/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {

  let result = arr.filter(function(item, index, arr){

    if (item <= b && item >= a){

      return 1;

    } else {
      
      return 0;
    }
    
  })

  return result;
  
}