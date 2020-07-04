/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(Str) {
    let re = /[А-Яа-я+,\s]+/;
    let strToArr = Str.split(re);
    let result = {
        min: Math.min(...strToArr),
        max: Math.max(...strToArr)
    }
    return result;
}  
