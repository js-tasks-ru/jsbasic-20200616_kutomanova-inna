/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    let tbody = document.createElement('tbody');
    this.elem.appendChild(tbody);

    for (let i = 0; i < rows.length; i++) {
      let tr = document.createElement('tr');
  
      for (let item in  rows[i]) {
        let td = document.createElement('td');
        td.innerHTML = rows[i][item];
        tr.appendChild(td);
      }

      let td = document.createElement('td');
      td.innerHTML = '<button>X</button>';
      let buttonX = td.lastChild;
      tr.appendChild(td);
      tbody.appendChild(tr);

      function hideTr() {
        tr.remove();
      }

      buttonX.addEventListener('click', hideTr);
      
    }
  }
}





  