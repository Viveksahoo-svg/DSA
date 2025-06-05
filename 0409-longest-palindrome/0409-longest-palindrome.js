/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        let set = new Set();
    let count = 0;
    for (let char of s) {
        if (set.has(char)) {
            set.delete(char);
            count += 2;
        } else {
            set.add(char);
        }
    }
    return set.size > 0 ? count + 1 : count;
};