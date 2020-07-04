/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  for (item of friends) {
    let li = document.createElement ('li');
    li.innerHTML = item.firstName + ' ' + item.lastName;
    newUl.appendChild(li);
  }
  return newUl;
}
