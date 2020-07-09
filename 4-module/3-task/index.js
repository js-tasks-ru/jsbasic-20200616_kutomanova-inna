/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let allTable = table;
        
    for (let i = 1; i < allTable.rows.length; i ++) {
        for (let j = 0; j < allTable.rows[i].cells.length; j ++) {
            if (j === 3) {
                if (allTable.rows[i].cells[j].hasAttribute('data-available')) {
                    if (allTable.rows[i].cells[j].getAttribute('data-available') === "true") {
                        allTable.rows[i].cells[j].classList.add('available');    
                    } else {
                        allTable.rows[i].cells[j].classList.add('unavailable'); 
                    }
                } else {
                    allTable.rows[i].cells[j].setAttribute('hidden', '');
                }
            }                    
            if (j === 2) {
                if (allTable.rows[i].cells[j].textContent === 'm') {
                    allTable.rows[i].cells[j].classList.add('male');
                } else {
                    allTable.rows[i].cells[j].classList.add('female');
                } 
            } 
            if (j === 1) {
                if (allTable.rows[i].cells[j].textContent < 18) {
                    allTable.rows[i].cells[j].style.textDecoration = "line-through";
                }
            } 
        }        
    }
}