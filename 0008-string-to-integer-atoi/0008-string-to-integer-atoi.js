/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if (s.length === 0) return 0;
    let sign = 1;
    let result = 0;
    let i = 0;
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    while (i < s.length && /[0-9]/.test(s[i])) {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        if (result > MAX_INT / 10 || 
            (result === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)) {
            return sign === 1 ? MAX_INT : MIN_INT;
        }
        result = result * 10 + digit;
        i++;
    }
    return sign * result;
};