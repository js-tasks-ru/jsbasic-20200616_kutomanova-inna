/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let allTable = document.querySelector('table');
    
    for (let i = 0; i < allTable.rows.length; i ++) {
        allTable.rows[i].cells[i].style.backgroundColor = "red";
    }
}
    
