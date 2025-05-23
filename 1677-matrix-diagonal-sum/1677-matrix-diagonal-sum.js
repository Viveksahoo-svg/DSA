/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - 1 - i];
    }
    
    if (n % 2 === 1) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    
    return sum;
};