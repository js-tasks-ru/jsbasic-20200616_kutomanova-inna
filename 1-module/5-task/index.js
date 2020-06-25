/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {

if (maxlength == 0) {
    str = "";  
} else 
if (str.length > maxlength) 
{
  str = str.slice(0, maxlength - 1) + "…";  
  
} 
return str;
}

