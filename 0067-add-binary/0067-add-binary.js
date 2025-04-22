/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
        let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    for (; i >= 0 || j >= 0 || carry; i--, j--) {
        const bitA = i >= 0 ? +a[i] : 0;
        const bitB = j >= 0 ? +b[j] : 0;
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }

    return result;
};