/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  count = 0;
  for (let key in obj) {
    count ++;
  }
  if (count != 0) {
    return false;
  }

  return true;
}