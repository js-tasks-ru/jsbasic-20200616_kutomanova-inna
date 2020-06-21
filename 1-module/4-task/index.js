/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  const poker = '1XBET';
  const threeX = 'XXX';
  str = str.toLocaleUpperCase();

  if (str.includes(poker) || str.includes(threeX)){
    return true;
  }
  return false;
    
}