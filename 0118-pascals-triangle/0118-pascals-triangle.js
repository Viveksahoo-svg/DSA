/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
        let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prev = triangle[i - 1];
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(prev[j - 1] + prev[j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};