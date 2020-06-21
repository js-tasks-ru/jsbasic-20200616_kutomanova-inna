/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {

  if (str === '') {
    return str;
  }

  str = str.charAt(0).toLocaleUpperCase() + str.substr(1);
  return str;
}
