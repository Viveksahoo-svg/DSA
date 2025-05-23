/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = values[s[i]];
        let next = i + 1 < s.length ? values[s[i + 1]] : 0;
        
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
};