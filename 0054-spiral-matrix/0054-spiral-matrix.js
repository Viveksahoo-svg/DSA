/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    const total = matrix.length * matrix[0].length;
    
    for (let count = 0; count < total && top <= bottom && left <= right; ) {
        // Traverse right
        for (let i = left; i <= right && count < total; i++) {
            result.push(matrix[top][i]);
            count++;
        }
        top++;
        
        // Traverse down
        for (let i = top; i <= bottom && count < total; i++) {
            result.push(matrix[i][right]);
            count++;
        }
        right--;
        
        // Traverse left
        for (let i = right; i >= left && count < total; i--) {
            result.push(matrix[bottom][i]);
            count++;
        }
        bottom--;
        
        // Traverse up
        for (let i = bottom; i >= top && count < total; i--) {
            result.push(matrix[i][left]);
            count++;
        }
        left++;
    }
    
    return result;
};