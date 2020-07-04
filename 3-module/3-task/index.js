/**
 * @param {string} str
 * @returns {string}
 */

function camelize(str) {
  let arr = str.split('-');
  let cameleCase = arr.map(function(item, index, arr) {
      
      if (index===0) {
        return item;
        
      }  else {
        return item.charAt(0).toLocaleUpperCase() + item.substr(1);
      }

    });
  
  let result = cameleCase.join ('');

  return result;
  
}


