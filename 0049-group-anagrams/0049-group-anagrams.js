/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let keys = [];

    for (let i = 0; i < strs.length; i++) {
        let count = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            let index = strs[i].charCodeAt(j) - 97;
            count[index]++;
        }

        let key = count.join("#");
        let found = false;

        for (let k = 0; k < keys.length; k++) {
            if (keys[k] === key) {
                result[k].push(strs[i]);
                found = true;
                break;
            }
        }

        if (!found) {
            keys.push(key);
            result.push([strs[i]]);
        }
    }

    return result; 
};