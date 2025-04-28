/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let str = Math.abs(x).toString().split('').reverse().join('');
    let reversed = parseInt(str);
    if (reversed > 2**31 - 1) {
        return 0; 
    }
    return isNegative ? -reversed : reversed;
};