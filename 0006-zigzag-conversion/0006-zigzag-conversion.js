/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    let rows = Array(numRows).fill("");
    let currentRow = 0;
    let step = 1;
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        if (currentRow === 0) step = 1;
        else if (currentRow === numRows - 1) step = -1;
        currentRow += step;
    }
    return rows.join("");
};