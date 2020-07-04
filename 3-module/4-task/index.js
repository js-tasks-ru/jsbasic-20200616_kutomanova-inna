/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filterUsers = users.filter(function(item, index, arrey) {

    if (item.age <= age) {
      return true;
    } else {
      return false;
    }
  
  });
  let mapUsers = filterUsers.map(function(item, index, arrey) {
    let resultUser = item.name + ', ' + item.balance;
    return resultUser;
  });
  let joinUsers = mapUsers.join('\n');
  return joinUsers;
 
}
